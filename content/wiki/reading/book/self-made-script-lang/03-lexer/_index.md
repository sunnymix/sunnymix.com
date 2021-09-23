---
title: "03 Lexer"
date: 2021-09-17T17:39:53+08:00
draft: false
author: Sunny
weight: 3
---

## 3.1 Token 对象

- 分词：找出源代码中有用的单词（后文统称为 Token）。
- 去除空白和注释。



## 3.2 通过正则表达式定义 Token

参考：正则常用元字符

| 元字符      | 含义                             |
| ----------- | -------------------------------- |
| `.`         | 匹配任意字符。                   |
| `[0-9]`     | 匹配 0 到 9 中的某个数字。       |
| `[^0-9]`    | 匹配除 0 到 9 中之外的某个字符。 |
| `pat*`      | 模式 pat 至少重复出现 0 次。     |
| `pat+`      | 模式 pat 至少重复出现 1 次。     |
| `pat?`      | 模式 pat 至少出现 0 次或 1 次。  |
| `pat1|pat2` | 匹配 pat1 或 pat2。              |
| `()`        | 将括号内视为一个完整的模式。     |
| `\c`        | 与单个字符匹配（转义元字符）。   |



## 3.3 借助 java.util.regex 设计 Lexer

- 实现类：Lexer

```java
public class Lexer {

    public static final String PAT = "\\s*((//.*)|([0-9]+)|(\"(\\\\\"|\\\\\\\\|\\\\n|[^\"])*\")"
            + "|[A-Z_a-z][A-Z_a-z0-9]*|==|<=|>=|&&|\\|\\||\\p{Punct})?";

    private final Pattern pat = Pattern.compile(PAT);

    private final ArrayList<Token> que = new ArrayList<>();

    private boolean hasMore;

    private final LineNumberReader reader;

    public Lexer(Reader reader) {
        hasMore = true;
        this.reader = new LineNumberReader(reader);
    }

    public Token read() throws ParseException {
        // FIXME: 读循环难以理解。
        if (_fillQue(0)) {
            return que.remove(0);
        } else {
            return Token.EOF;
        }
    }

    public Token peek(int i) throws ParseException {
        // FIXME: 这个函数的作用是什么。
        if (_fillQue(i)) {
            return que.get(i);
        } else {
            return Token.EOF;
        }
    }

    private boolean _fillQue(int i) throws ParseException {
        // FIXME: 循环终止条件比较晦涩。
        while (i >= que.size()) {
            if (hasMore) {
                _readLine();
            } else {
                return false;
            }
        }
        return true;
    }

    private void _readLine() throws ParseException {
        String line;
        try {
            line = this.reader.readLine();
        } catch (IOException e) {
            throw new ParseException(e);
        }
        if (line == null) {
            hasMore = false;
            return;
        }
        int lineNum = this.reader.getLineNumber();
        Matcher matcher = pat.matcher(line);
        matcher.useTransparentBounds(true).useAnchoringBounds(false);
        int pos = 0;
        int endPos = line.length();
        while (pos < endPos) {
            matcher.region(pos, endPos);
            if (matcher.lookingAt()) {
                _addToken(lineNum, matcher);
                pos = matcher.end();
            } else {
                throw new ParseException(String.format("bad token at line %d", lineNum));
            }
        }
        que.add(new IdToken(lineNum, Token.EOL));
    }

    private void _addToken(int lineNum, Matcher matcher) {
        String mat = matcher.group(1);
        if (mat != null) { // not a space
            if (matcher.group(2) == null) { // not a comment
                Token token;
                if (matcher.group(3) != null) { // a num
                    token = new NumToken(lineNum, Integer.parseInt(mat));
                } else if (matcher.group(4) != null) { // a str
                    token = new StrToken(lineNum, _toStrLiteral(mat));
                } else { // a id
                    token = new IdToken(lineNum, mat);
                }
                que.add(token);
            }
        }
    }

    private String _toStrLiteral(String str) {
        StringBuilder bud = new StringBuilder();
        int len = str.length() - 1;
        for (int idx = 1; idx < len; idx++) {
            char cha = str.charAt(idx);
            if (cha == '\\' && idx + 1 < len) {
                char cha2 = str.charAt(idx + 1);
                if (cha2 == '"' || cha2 == '\\') {
                    cha = str.charAt(++idx);
                } else if (cha2 == 'n') {
                    ++idx;
                    cha = '\n';
                }
            }
            bud.append(cha);
        }
        return bud.toString();
    }

}
```



## 3.4 Lexer 试运行

- 词法读取器：LexerReader

```java
public class LexerReader extends Reader {

    private String buf = null;

    private int pos = 0;

    @Override
    public int read(char[] cha, int off, int len) throws IOException {
        if (buf == null) {
            String in = _showDlg();
            if (in == null) {
                return -1;
            } else {
                System.out.println(in);
                buf = in + "\n";
                pos = 0;
            }
        }

        int size = 0;
        int length = buf.length();
        while (pos < length && size < len) {
            cha[off + size++] = buf.charAt(pos++);
        }
        if (pos == length) {
            buf = null;
        }
        return size;
    }

    @Override
    public void close() throws IOException {
    }

    private String _showDlg() {
        JTextArea txt = new JTextArea(20, 40);
        JScrollPane pan = new JScrollPane(txt);
        int res = JOptionPane.showOptionDialog(null, pan, "Input",
                JOptionPane.OK_CANCEL_OPTION,
                JOptionPane.PLAIN_MESSAGE,
                null, null, null);
        if (res == JOptionPane.OK_OPTION) {
            return txt.getText();
        } else {
            return null;
        }
    }

}
```



- 词法分析器测试类：LexerRunner

```java
public class LexerRunner {

    public static void main(String[] args) throws ParseException {
        run();
    }

    public static void run() throws ParseException {
        Lexer lex = new Lexer(new LexerReader());
        for (Token tok; (tok = lex.read()) != Token.EOF; ) {
            System.out.printf("%s·", tok.getStr());
        }
    }

}
```

