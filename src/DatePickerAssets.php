<?php


namespace wdmg\widgets;
use yii\web\AssetBundle;

class DatePickerAssets extends AssetBundle
{

    public $sourcePath = '@bower/bootstrap-datepicker-plugin/src';

    public function init()
    {
        parent::init();
        $this->css = YII_DEBUG ? ['css/datepicker.css'] : ['css/datepicker.min.css'];
        $this->js = YII_DEBUG ? ['js/datepicker.js'] : ['js/datepicker.min.js'];
        $this->depends = [\yii\web\JqueryAsset::className()];
    }

}