#!/bin/bash

# --- Configuration ---
# Output file name
OUTPUT_FILE="main.txt"

# List of essential root configuration files to include
ROOT_FILES=(
    "package.json"
    "postcss.config.mjs"
    "tailwind.config.ts"
    "tsconfig.json"
    "next.config.mjs"
    "next-env.d.ts"
    "eslint.config.mjs"
)

# List of folders to exclude
EXCLUDE_DIRS=(
    ".git"
    ".next"
    "node_modules"
    "public/images"
    "public/resume"
    "dist"
    "logs"
)

# File extensions to exclude
EXCLUDE_EXTS=(
    "png" "jpg" "jpeg" "gif" "svg" "pdf" "ico"
    "lock" "txt" "sh" "mdx" "css"
)

# --- Cleanup + Header ---
echo "// ----- HARSH YADAV PORTFOLIO CODE SNAPSHOT (Interview Focus) -----" > "$OUTPUT_FILE"
echo "// Timestamp: $(date)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# -----------------------------------------------------------
# 1. DIRECTORY STRUCTURE
# -----------------------------------------------------------
echo "// ----- DIRECTORY STRUCTURE -----" >> "$OUTPUT_FILE"
echo "// (Showing only essential code files)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Function to check if a file should be excluded
is_excluded() {
    local file=$1

    # Directory exclusions
    for dir in "${EXCLUDE_DIRS[@]}"; do
        if [[ "$file" == ./$dir* ]]; then
            return 0
        fi
    done

    # Extension exclusions
    local ext="${file##*.}"
    for exclude_ext in "${EXCLUDE_EXTS[@]}"; do
        if [[ "$ext" == "$exclude_ext" ]]; then
            return 0
        fi
    done

    # Hard-coded exclusions
    if [[ "$file" == "./package-lock.json" || "$file" == "./snapshot.sh" ]]; then
        return 0
    fi

    # Keyword-based exclusions
    if [[ "$file" =~ svg || "$file" =~ pdf || "$file" =~ icon ]]; then
        return 0
    fi

    return 1
}

# Generate file list (no grep used)
find . -type f | while read -r FILE; do
    if ! is_excluded "$FILE"; then
        echo "$FILE"
    fi
done >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"
echo "// ------------------------------------" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"


# -----------------------------------------------------------
# 2. FILE CONTENTS DUMP
# -----------------------------------------------------------
echo "// ----- FILE CONTENTS DUMP -----" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Dump ROOT_FILES first
for file in "${ROOT_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        echo "// ------------------------------------" >> "$OUTPUT_FILE"
        echo "// FILE: $file" >> "$OUTPUT_FILE"
        echo "// ------------------------------------" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

# Dump src/ files
find src/ -type f | sort | while read -r file; do
    if ! is_excluded "$file"; then
        echo "// ------------------------------------" >> "$OUTPUT_FILE"
        echo "// FILE: $file" >> "$OUTPUT_FILE"
        echo "// ------------------------------------" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

echo "// ----- END OF GENERATED SNAPSHOT -----" >> "$OUTPUT_FILE"

echo "✅ Portfolio code snapshot saved to main.txt"
