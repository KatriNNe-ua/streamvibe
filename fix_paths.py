from pathlib import Path
import re

root = Path(r"c:\Users\Admin\Desktop\практика\streamvibeReact")
extensions = {'.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.html'}
files = [p for p in root.rglob('*') if p.is_file() and p.suffix in extensions]

if not files:
    print('No files found for processing.')
    exit(0)

path_pattern = re.compile(r'(?<!["\'"\(\[\s\/])images/')
# non-capturing: images/ not preceded by "/'([<space>/

changed_files = []
for file in files:
    text = file.read_text(encoding='utf-8')
    new_text = re.sub(r'(?<!["\'"\(\[\s\/])images/', '/images/', text)
    if new_text != text:
        # backup
        bak = file.with_suffix(file.suffix + '.bak')
        bak.write_text(text, encoding='utf-8')
        file.write_text(new_text, encoding='utf-8')
        changed_files.append(file)

print(f'Processed {len(files)} files')
print(f'Changed {len(changed_files)} files')
for f in changed_files:
    print(f'- {f}')

# verification
remaining = []
for file in files:
    text = file.read_text(encoding='utf-8')
    if re.search(r'(?<!["\'"\(\[\s\/])images/', text):
        remaining.append(file)

print(f'Remaining non-fixed entries in {len(remaining)} files')
for f in remaining:
    print(f'- {f}')
