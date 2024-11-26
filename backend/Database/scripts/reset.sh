#!/bin/bash

# Remove existing database
rm -f ../privasee.db

# Run initialization script
./init.sh

echo "Database reset completed!"