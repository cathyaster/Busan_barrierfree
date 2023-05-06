<?php
    if (isset($_GET["mode"]))           //  $_GET["mode"] : 'modify' or 'delete'
        $mode = $_GET["mode"];
    else 
        $mode = "";   

    if (isset($_GET["num"]))            // $_GET["num"] : 레코드 번호
        $num = $_GET["num"];
    else 
        $num = "";

    if (isset($_GET["error"]))          // $_GET["error"] : 오류 발생 시 'y'
        $error = $_GET["error"];
    else 
        $error = "";
?>
<!DOCTYPE html>
<head>
<meta charset="utf-8">
</head>
<body>
    <h3>글 작성 시 비밀번호를 입력해 주세요.</h3>
    <?php
        if ($error=="y")               
            echo "<p>※ 비밀번호가 다릅니다. 다시 입력해주세요!</p>";
    ?>
    <form action="password.php?mode=<?=$mode?>&num=<?=$num?>" method="post">
        비밀번호 : <input type="password" name="pass">
        <button type="submit">확인</button>
    </form>
</body>
</html> 