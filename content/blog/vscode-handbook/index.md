---
title: "VSCode 手册 *"
date: 2021-12-09T22:30:00+08:00
draft: false
author: "Sunny"
---

## Code Shell 命令

1. 使用快捷键：cmd + shift + p
2. 搜索：shell command: install 'code' command in PATH

## 快捷键

### 扩展选择（选择文字）

- Command: Add Selection To Next Find Match
- 默认绑定：cmd + d，修改为：cmd + e（取 expand 含义）

## Workbench Color 自定义颜色

- Code - Preferences - Settings（快捷键：cmd + `）
- 搜索：color；找到：Workbench: Color Customizations；打开：Edit in settings.json

```
"workbench.colorCustomizations": {
    "statusBar.background" : "#303030",
    "statusBar.noFolderBackground" : "#222225",
    "statusBar.debuggingBackground": "#511f1f"
}
```

