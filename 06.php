<?php

//  https://www.youtube.com/watch?v=uU_FFtbCcLc
$idURL = 'https://www.youtube.com/watch?v=uU_FFtbCcLc';
/*$comandString = './06.script.sh '. $idURL;
echo $comandString;
$output = shell_exec($comandString);

echo "<pre>";
print_r($output);



*/

echo exec('youtube-dl -t -f 43 https://www.youtube.com/watch?v=uU_FFtbCcLc');