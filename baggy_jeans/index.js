const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 정적 파일을 제공할 디렉토리를 설정합니다.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});