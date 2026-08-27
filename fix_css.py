import re

css_path = 'src/app/components/DivisionsSection/DivisionsSection.module.css'
with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix center card text alignment
content = content.replace(
    '.centerImageWrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
    '.centerImageWrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}'
)

# Replace values for 3-column layout in base CSS (before media queries)

# Main trunk
content = re.sub(r'(\.chartContainer::before\s*\{[^}]*?left:\s*)320px(;\s*right:\s*)320px', r'\g<1>260px\g<2>260px', content, count=1)
content = re.sub(r'(\.animatedLineLeft\s*\{[^}]*?left:\s*)320px(;\s*width:\s*calc\(50%\s*-\s*)320px', r'\g<1>260px\g<2>260px', content, count=1)
content = re.sub(r'(\.animatedLineRight\s*\{[^}]*?right:\s*)320px(;\s*width:\s*calc\(50%\s*-\s*)320px', r'\g<1>260px\g<2>260px', content, count=1)

# Left side vertical lines and branches
content = re.sub(r'(\.columnSplitLeft::after\s*\{[^}]*?right:\s*)-120px', r'\g<1>-60px', content, count=1)
content = re.sub(r'(\.cardLeftTree::after\s*\{[^}]*?right:\s*)-120px(;\s*width:\s*)120px', r'\g<1>-60px\g<2>60px', content, count=1)
content = re.sub(r'(\.animatedCardLineLeft\s*\{[^}]*?right:\s*)-120px(;\s*width:\s*)120px', r'\g<1>-60px\g<2>60px', content, count=1)
content = re.sub(r'(\.animatedVerticalLeftTop\s*\{[^}]*?right:\s*)-120px', r'\g<1>-60px', content, count=1)
content = re.sub(r'(\.animatedVerticalLeftBottom\s*\{[^}]*?right:\s*)-120px', r'\g<1>-60px', content, count=1)

# Right side vertical lines and branches
content = re.sub(r'(\.columnSplitRight::after\s*\{[^}]*?left:\s*)-120px', r'\g<1>-60px', content, count=1)
content = re.sub(r'(\.cardRightTree::before\s*\{[^}]*?left:\s*)-120px(;\s*width:\s*)120px', r'\g<1>-60px\g<2>60px', content, count=1)
content = re.sub(r'(\.animatedCardLineRight\s*\{[^}]*?left:\s*)-120px(;\s*width:\s*)120px', r'\g<1>-60px\g<2>60px', content, count=1)
content = re.sub(r'(\.animatedVerticalRightTop\s*\{[^}]*?left:\s*)-120px', r'\g<1>-60px', content, count=1)
content = re.sub(r'(\.animatedVerticalRightBottom\s*\{[^}]*?left:\s*)-120px', r'\g<1>-60px', content, count=1)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS Fixed successfully!")
