<?php
    $mode = $_GET["mode"];          // modify : 수정, delete : 삭제
    $num = $_GET["num"];            // 레코드 번호
	$pass = $_POST["pass"];	        // 비밀번호

	$con = mysqli_connect("localhost", "user", "12345", "sample");	// DB 연결

	$sql = "select pass from freeboard where num=$num";    // 레코드 검색
	$result = mysqli_query($con, $sql);  // $sql 에 저장된 명령 실행

    $row = mysqli_fetch_assoc($result);     // 레코드 가져오기

    $db_password = $row["pass"];        // DB 비밀번호
	mysqli_close($con);       // DB 연결 끊기

    // $pass : 입력 비밀번호, $db_password : DB 저장 비밀번호
    if ($pass == $db_password) {        
        if ($mode=="modify")            // 수정 모드
            $url = "modify_form.php?num=$num";
        else                            // 삭제 모드
            $url = "delete.php?num=$num";

        echo "<script>
                self.close();
                opener.location.href = '$url';
              </script>";
    }              
    else {         // 입력 비밀번호가 DB 비밀번호와 다를 경우
        echo "<script>
            location.href ='password_form.php?num=$num&error=y';
            </script>";
    }
?>
