<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>index.ejs</h1>

    <a href="parameter?data1=aaa&data2=bbb">parameter</a><br />

    <form action="parameter" method="get">
      data1: <input type="text" name="data1" /><br />
      data2: <input type="text" name="data2" /><br />
      <button type="submit">확인</button>
    </form>

    <form action="parameter" method="post">
      data1: <input type="text" name="data1" /><br />
      data2: <input type="text" name="data2" /><br />
      <button type="submit">확인</button>
    </form>

    <hr/>
    <a href="save_cookie">쿠키 저장</a><br />
    <a href="load_cookie">쿠키 로드</a><br />

    <hr/>
    <a href="save_session">세션 저장</a><br />
    <a href="load_session">세션 로드</a><br />
  </body>
</html>
