#!/bin/sh
# Daily backup of the client's saved content and photos. Keeps the last 7 days.
# Usage: DATA_DIR=/var/renovvo-data BACKUP_DIR=/var/renovvo-backups ./backup.sh
DATA_DIR="${DATA_DIR:-/var/renovvo-data}"
BACKUP_DIR="${BACKUP_DIR:-/var/renovvo-backups}"
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/renovvo-$(date +%F).tar.gz" -C "$DATA_DIR" .
find "$BACKUP_DIR" -name 'renovvo-*.tar.gz' -mtime +7 -delete
