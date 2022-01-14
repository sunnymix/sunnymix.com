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
        configurations.runtimeClasspath.collect {
            exclude '.project'
            exclude '.classpath'
            exclude 'about.html'
            exclude 'LICENSE'
            exclude 'NOTICE'
            exclude 'LICENSE.txt'
            exclude 'NOTICE.txt'
            exclude 'META-INF/*'
            exclude 'META-INF/NOTICE'
            exclude 'META-INF/LICENSE.txt'
            exclude 'META-INF/NOTICE.txt'
            exclude 'META-INF/DEPENDENCIES'

            it.isDirectory() ? it : zipTree(it)
        }
    }
}
```

