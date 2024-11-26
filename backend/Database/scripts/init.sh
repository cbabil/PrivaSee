#!/bin/sh

BASE_PATH="/opt/privasee"
DB_FILE="$BASE_PATH"/"database/privasee.db"
INIT_SCRIPT="$BASE_PATH"/"database/sql/init.sql"
SAMPLE_DATA="$BASE_PATH"/"database/sql/sampledata.sql"

# Check if the SQLite database file exists
if [ ! -f "$DB_FILE" ]; then
  # If the database file doesn't exist, create it with the schema
  echo "SQLite database not found. Creating it..."
  echo "Init script: $INIT_SCRIPT"
  sqlite3 "$DB_FILE" < "$INIT_SCRIPT"
  echo "SQLite database and schema created."
  sqlite3 "$DB_FILE" < "$SAMPLE_DATA"
  echo "Sample data has been loaded..."
else
  echo "SQLite database already exists."
fi