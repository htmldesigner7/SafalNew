import re

css_path = 'src/app/components/DivisionsSection/DivisionsSection.module.css'
with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Desktop (Base)
content = re.sub(r'(\.chartContainer\s*\{[^}]*?gap:\s*)120px', r'\g<1>200px', content, count=1)
content = re.sub(r'(\.chartContainer::before\s*\{[^}]*?left:\s*)260px(;\s*right:\s*)260px', r'\g<1>300px\g<2>300px', content, count=1)
content = re.sub(r'(\.animatedLineLeft\s*\{[^}]*?left:\s*)260px(;\s*width:\s*calc\(50%\s*-\s*)260px', r'\g<1>300px\g<2>300px', content, count=1)
content = re.sub(r'(\.animatedLineRight\s*\{[^}]*?right:\s*)260px(;\s*width:\s*calc\(50%\s*-\s*)260px', r'\g<1>300px\g<2>300px', content, count=1)

content = re.sub(r'(\.columnSplitLeft::after\s*\{[^}]*?right:\s*)-60px', r'\g<1>-100px', content, count=1)
content = re.sub(r'(\.cardLeftTree::after\s*\{[^}]*?right:\s*)-60px(;\s*width:\s*)60px', r'\g<1>-100px\g<2>100px', content, count=1)
content = re.sub(r'(\.animatedCardLineLeft\s*\{[^}]*?right:\s*)-60px(;\s*width:\s*)60px', r'\g<1>-100px\g<2>100px', content, count=1)
content = re.sub(r'(\.animatedVerticalLeftTop\s*\{[^}]*?right:\s*)-60px', r'\g<1>-100px', content, count=1)
content = re.sub(r'(\.animatedVerticalLeftBottom\s*\{[^}]*?right:\s*)-60px', r'\g<1>-100px', content, count=1)

content = re.sub(r'(\.columnSplitRight::after\s*\{[^}]*?left:\s*)-60px', r'\g<1>-100px', content, count=1)
content = re.sub(r'(\.cardRightTree::before\s*\{[^}]*?left:\s*)-60px(;\s*width:\s*)60px', r'\g<1>-100px\g<2>100px', content, count=1)
content = re.sub(r'(\.animatedCardLineRight\s*\{[^}]*?left:\s*)-60px(;\s*width:\s*)60px', r'\g<1>-100px\g<2>100px', content, count=1)
content = re.sub(r'(\.animatedVerticalRightTop\s*\{[^}]*?left:\s*)-60px', r'\g<1>-100px', content, count=1)
content = re.sub(r'(\.animatedVerticalRightBottom\s*\{[^}]*?left:\s*)-60px', r'\g<1>-100px', content, count=1)

# Split content by media queries to process them safely
parts = re.split(r'(@media\s*\(max-width:\s*\d+px\)\s*\{)', content)

for i in range(2, len(parts), 2):
    mq = parts[i-1]
    block = parts[i]
    
    if '1441px' in mq:
        block = block.replace('gap: 60px;', 'gap: 120px;')
        block = block.replace('-30px', '-60px')
        block = block.replace('width: 30px', 'width: 60px')
        block = block.replace('190px', '220px')
    
    elif '1281px' in mq:
        block = block.replace('gap: 40px;', 'gap: 80px;')
        block = block.replace('-20px', '-40px')
        block = block.replace('width: 20px', 'width: 40px')
        block = block.replace('160px', '180px')
        
    elif '1025px' in mq:
        block = block.replace('gap: 40px;', 'gap: 80px;') # Both chartContainer and columnSplit
        block = block.replace('width: 200px;', 'width: 240px;') # animatedLineLeft/Right
        block = block.replace('-20px', '-40px')
        block = block.replace('width: 20px', 'width: 40px')
        
    elif '769px' in mq:
        block = block.replace('gap: 30px;', 'gap: 60px;')
        block = block.replace('width: 170px;', 'width: 200px;')
        block = block.replace('-15px', '-30px')
        block = block.replace('width: 15px', 'width: 30px')
        
    elif '431px' in mq:
        block = block.replace('gap: 24px;', 'gap: 40px;')
        block = block.replace('width: 164px;', 'width: 180px;')
        block = block.replace('-12px', '-20px')
        block = block.replace('width: 12px', 'width: 20px')
        
    elif '361px' in mq:
        block = block.replace('gap: 16px;', 'gap: 30px;')
        block = block.replace('width: 212px;', 'width: 150px;')
        block = block.replace('-8px', '-15px')
        block = block.replace('width: 8px', 'width: 15px')
        
    parts[i] = block

with open(css_path, 'w', encoding='utf-8') as f:
    f.write("".join(parts))

print("CSS updated successfully!")
