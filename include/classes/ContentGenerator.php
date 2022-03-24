<?php

class ContentGenerator 
{
    static function GenerateInfobox(string $header, string $body) 
    {
        echo "
        <div class='info-box'>
            <img src='style/img/info.png' class='info-icon'>
            <div>
                <h2>$header</h2>
                <p>$body</p>
            </div>
        </div>
        ";
    }
}