<?php
require __DIR__ . '/vendor/autoload.php';

use Youtubedl\Youtubedl;
use Youtubedl\Exception\CopyrightException;
use Youtubedl\Exception\NotFoundException;
use Youtubedl\Exception\PrivateVideoException;

$dl = new Youtubedl([
    'continue' => true, // force resume of partially downloaded files. By default, youtube-dl will resume downloads if possible.
    'format' => '43',
]);
// For more options go to https://github.com/rg3/youtube-dl#user-content-options

//$dl->setDownloadPath('/home/anb');
// Enable debugging
/*$dl->debug(function ($type, $buffer) {
    if (\Symfony\Component\Process\Process::ERR === $type) {
        echo 'ERR > ' . $buffer;
    } else {
        echo 'OUT > ' . $buffer;
    }
});*/
try {
    $video = $dl->download('https://www.youtube.com/watch?v=oDAw7vW7H0c');
    echo $video->getTitle(); // Will return Phonebloks
    // $dl->getFile(); // \SplFileInfo instance of downloaded file
} catch (NotFoundException $e) {
    // Video not found
} catch (PrivateVideoException $e) {
    // Video is private
} catch (CopyrightException $e) {
    // The YouTube account associated with this video has been terminated due to multiple third-party notifications of copyright infringement
} catch (\Exception $e) {
    // Failed to download
}