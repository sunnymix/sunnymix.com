---
title: "Gradle 手册 *"
date: 2021-12-13T13:42:00+08:00
draft: false
author: "Sunny"
---

## 制作 Jar 包 （包含依赖的外部类库）

build.gradle

```
plugins 'java'

group '?'
version '?'

repositories { mavenCentral() }

dependencies {}

// Setup
jar {
    manifest {
        attributes('Main-Class': '?')
    }
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}
```

