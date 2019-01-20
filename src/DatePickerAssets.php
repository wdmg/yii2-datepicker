<?php


namespace wdmg\widgets;
use yii\web\AssetBundle;

class DatePickerAssets extends AssetBundle
{
    public $sourcePath = '@vendor/wdmg/yii2-datepicker/src/assets';

    public $css = [
        'css/datepicker.css',
    ];

    public $js = [
        'js/datepicker.js'
    ];

    public $depends = [
        'yii\bootstrap\BootstrapPluginAsset'
    ];

}