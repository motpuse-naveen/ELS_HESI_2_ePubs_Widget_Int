import re

# 🛠️ Set the starting playOrder number here
start_playorder = 465

# Read input
with open('test.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to update playOrder values
def update_playorder(content, start=1):
    matches = list(re.finditer(r'playOrder="(\d+)"', content))
    new_content = content
    offset = 0

    for i, match in enumerate(matches, start=start):
        start_idx, end_idx = match.span(1)
        new_content = (
            new_content[:start_idx + offset] +
            str(i) +
            new_content[end_idx + offset:]
        )
        offset += len(str(i)) - (end_idx - start_idx)
    
    return new_content

# Generate updated content
updated_content = update_playorder(content, start=start_playorder)

# Write to output
with open('updated_test.txt', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print(f"✅ playOrder values updated starting from {start_playorder}, saved to 'updated_test.txt'")
