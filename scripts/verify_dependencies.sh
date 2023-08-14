#!/bin/bash

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "Pandoc is not detected on your system."
    echo "Please visit https://pandoc.org/installing.html for installation instructions."
    exit 1
fi
