#!/bin/bash

# Ensure we're in the script's directory
cd "$(dirname "$0")"

# Verify dependencies
./verify_dependencies.sh

# Clear out previous builds
rm -rf ../dist/
mkdir -p ../dist/

# Automatically generate the file list based on your numbered system
FILES=$(find ../book -type f -name '*.md' | sort)

BOOK_TITLE="Engineering Leadership Handbook"
EPUB_METADATA="../assets/epub-metadata.xml"

# Build HTML version
echo "Building HTML..."
pandoc $FILES -s -o ../dist/engineering-leadership-handbook.html --metadata title="$BOOK_TITLE" --toc --toc-depth=2

# Build PDF version (requires LaTeX for pandoc to generate PDFs)
echo "Building PDF..."
pandoc $FILES -s -o ../dist/engineering-leadership-handbook.pdf --metadata title="$BOOK_TITLE" --toc --toc-depth=2

# Build EPUB version
echo "Building EPUB..."
pandoc $FILES -s -o ../dist/engineering-leadership-handbook.epub --metadata title="$BOOK_TITLE" --toc --toc-depth=2 --epub-cover-image ../assets/images/front-cover.png --epub-metadata=$EPUB_METADATA

echo "Build completed. Outputs available in dist/ directory."