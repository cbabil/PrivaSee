#!/bin/bash

# Get current timestamp
timestamp=$(date +%Y%m%d_%H%M%S)

# Create backups directory if it doesn't exist
mkdir -p ../backups

# Create backup
sqlite3 ../privasee.db ".backup '../backups/privasee_${timestamp}.db'"

echo "Backup created: privasee_${timestamp}.db"