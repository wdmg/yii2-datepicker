/*!
 * DatePicker for Bootstrap3
 */
+ function($) {

    "use strict";

    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var key in props) {
                var prop = props[key];
                prop.configurable = true;
                if (prop.value) prop.writable = true;
            }
            Object.defineProperties(target, props);
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    var _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var DatePicker = (function($) {

        var NAME = "datepicker";
        var JQUERY_NO_CONFLICT = $.fn[NAME];

        var Default = {
            onShow: function onShow() { },
            onShown: function onShown() { },
            onHide: function onHide() { },
            onHidden: function onHidden() { }
        };

        var DatePicker = (function() {
            function DatePicker($element, config) {

                var _this = this;
                _classCallCheck(this, DatePicker);

                this._config = $.extend({}, Default, config);
                this._$element = $element instanceof jQuery ? $element : $($element);
                this._isBootstrap3 = $.fn.modal.Constructor.VERSION[0] == 3;

                this.currentYear = null;
                this.currentMonth = null;
                this.currentDay = null;
                this._header = null;
                this._html = null;
                this.$popover = null;
                this._$popover = null;

                $(this._$element).on('click', '.input-group-btn > button[data-toggle="popover"]', function(event) {

                    _this._$popover = $(event.target);

                    var popoverId = _this._$popover.attr('aria-describedby');
                    _this.$popover = $('#'+popoverId);

                    _this.showCurrent();

                    _this._$popover.popover({
                        placement: 'auto',
                        html: true,
                        template: '<div class="popover popover-datepicker" role="tooltip"><div class="arrow"></div><h3 class="popover-title text-center"></h3><div class="popover-content"></div></div>',
                        title: function() {
                            return _this._header;
                        },
                        content: function() {
                            return _this._html;
                        },
                    }).click(function(event) {
                        event.preventDefault();
                    });

                    _this._$popover.popover('show');

                    _this._$popover.on('show.bs.popover', function() {
                        //return _this._config.onShow.call(_this);
                    }).on('shown.bs.popover', function() {

                        var popoverId = _this._$popover.attr('aria-describedby');
                        var $popover = $('#'+popoverId);

                        $popover.on("click", 'a[data-set]', function (event) {
                            event.preventDefault();
                            _this.setDate();
                            return false;
                        });

                        $popover.on("click", 'a[data-rel="prev-year"]', function (event) {
                            event.preventDefault();
                            _this.getPrevYear();
                            return false;
                        });

                        $popover.on("click", 'a[data-rel="next-year"]', function (event) {
                            event.preventDefault();
                            _this.getNextYear();
                            return false;
                        });

                        $popover.on("click", 'a[data-rel="prev-month"]', function (event) {
                            event.preventDefault();
                            _this.getPrevMonth();
                            return false;
                        });

                        $popover.on("click", 'a[data-rel="next-month"]', function (event) {
                            event.preventDefault();
                            _this.getNextMonth();
                            return false;
                        });

                        //return _this._config.onShown.call(_this);
                    }).on('hide.bs.popover', function() {
                        //return _this._config.onHide.call(_this);
                    }).on('hidden.bs.popover', function() {
                        //return _this._config.onHidden.call(_this);
                    });
                });
            }
            _createClass(DatePicker, {
                element: {
                    value: function element() {
                        return this._$element;
                    }
                },
                showCurrent: {
                    value: function showCurrent(year, month, day) {

                        // Vars
                        var header, html, dateFormat, currentDate, currentMonth, currentYear, daysStrings, monthsStrings;

                        // Set default format
                        this.dateFormat = 'dd/mm/yyyy';

                        // Set the current month, year
                        this.currentDate = new Date();

                        if(year)
                            this.currentYear = parseInt(year);
                        else
                            this.currentYear = this.currentDate.getFullYear();

                        if(month)
                            this.currentMonth = parseInt(month);
                        else
                            this.currentMonth = this.currentDate.getMonth();

                        if(day)
                            this.currentDay = parseInt(day);
                        else
                            this.currentDay = this.currentDate.getDate();

                        // Days of week, starting on Monday
                        this.daysStrings = [
                            {
                                'short': 'Mon',
                                'full': 'Monday'
                            },
                            {
                                'short': 'Tue',
                                'full': 'Tuesday'
                            },
                            {
                                'short': 'Wed',
                                'full': 'Wednesday'
                            },
                            {
                                'short': 'Thu',
                                'full': 'Thursday'
                            },
                            {
                                'short': 'Fri',
                                'full': 'Friday'
                            },
                            {
                                'short': 'Sat',
                                'full': 'Saturday'
                            },
                            {
                                'short': 'Sun',
                                'full': 'Sunday'
                            }
                        ];

                        // Months, starting on January
                        this.monthsStrings = [
                            {
                                'short': 'Jan',
                                'full': 'January'
                            },
                            {
                                'short': 'Feb',
                                'full': 'February'
                            },
                            {
                                'short': 'Mar',
                                'full': 'March'
                            },
                            {
                                'short': 'Apr',
                                'full': 'April'
                            },
                            {
                                'short': 'May',
                                'full': 'May'
                            },
                            {
                                'short': 'Jun',
                                'full': 'June'
                            },
                            {
                                'short': 'Jul',
                                'full': 'July'
                            },
                            {
                                'short': 'Aug',
                                'full': 'August'
                            },
                            {
                                'short': 'Sep',
                                'full': 'September'
                            },
                            {
                                'short': 'Oct',
                                'full': 'October'
                            },
                            {
                                'short': 'Nov',
                                'full': 'November'
                            },
                            {
                                'short': 'Dec',
                                'full': 'December'
                            }
                        ];

                        if (typeof(this.dateFormat) == 'string')
                            this.dateFormat = this.dateFormat.charAt(0).toUpperCase();
                        else
                            this.dateFormat = 'M';


                        var prevYearLink = '<a href="#" data-rel="prev-year" class="btn btn-small pull-left">&lt;&lt;</a>';
                        var nextYearLink = '<a href="#" data-rel="next-year" class="btn btn-small pull-right">&gt;&gt;</a>';
                        var prevMonthLink = '<a href="#" data-rel="prev-month" class="btn btn-small pull-left">&lt;</a>';
                        var nextMonthLink = '<a href="#" data-rel="next-month" class="btn btn-small pull-right">&gt;</a>';

                        // Write selected month and year
                        header = prevYearLink + prevMonthLink + this.monthsStrings[this.currentMonth]['short'] + ' – ' + this.currentYear + nextYearLink + nextMonthLink;


                        // Start rendering table of calendar
                        html = '<table class="table table-condensed table-calendar">';


                        // Generate the days of the week
                        html += '<thead>';
                        html += '<tr>';
                        for(var i = 0; i <= 6; i++) {
                            html += '<th class="header header-days text-center">' + this.daysStrings[i]['short'] + '</th>';
                        }
                        html += '</tr>';
                        html += '</thead>';


                        html += '<tbody>';
                        // First day of the current month
                        var firstDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();

                        // Last day of the current month
                        var lastDayOfCurrentMonth = new Date(this.currentYear, (this.currentMonth+1), 0).getDate();

                        // Last day of the previous month
                        var lastDayOfLastMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

                        // If current month is January last month is - December, in past year
                        if(this.currentMonth == 0)
                            var lastDayOfLastMonth = new Date((this.currentYear-1), 12, 0).getDate();

                        // Next day of the current month
                        var nextDay = this.dateFormat == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;
                        var dayMonth = nextDay;

                        // Prev day of the current month
                        var pastDay;

                        // Generate the table of calendar
                        for (var currentDay, week = 0, rows = 0; rows < 6; rows++) {

                            html += '<tr>';

                            for (var cols = 0; cols <= 6; cols++) {
                                currentDay = week + dayMonth - firstDayOfCurrentMonth;
                                if (currentDay < 1) {
                                    // Dates from prev month
                                    pastDay = lastDayOfLastMonth - firstDayOfCurrentMonth + nextDay++;
                                    html += '<td class="prev-month-day"><a href="#" class="btn btn-link btn-small disabled text-muted">' + pastDay + '</a></td>';
                                } else if (currentDay > lastDayOfCurrentMonth) {
                                    // Dates from next month
                                    html += '<td class="next-month-day"><a href="#" class="btn btn-link btn-small disabled text-muted">' + (nextDay++) + '</a></td>';
                                } else {


                                    var currentDateYear = this.currentYear.toString();
                                    var currentDateMonth = (this.currentMonth + 1).toString().replace(/\b(\d{1})\b/g, '0$1').replace(/-/g, '');
                                    var currentDateDay = currentDay.toString().replace(/\b(\d{1})\b/g, '0$1').replace(/-/g, '');

                                    // Current month dates
                                    if (this.currentDay == currentDay)
                                        html += '<td class="current-month-day"><a href="#" data-set="' + currentDateYear + '-'+ currentDateMonth +'-' + currentDateDay +'" class="btn btn-primary btn-small">' + currentDay + '</a></td>';
                                    else
                                        html += '<td class="current-month-day"><a href="#" data-set="' + currentDateYear + '-'+ currentDateMonth +'-' + currentDateDay +'" class="btn btn-link btn-small">' + currentDay + '</a></td>';

                                    nextDay = 1;
                                }

                                if (week % 7 == 6 && currentDay >= lastDayOfCurrentMonth)
                                    rows = 6;

                                week++;
                            }

                            html += '</tr>';
                        }

                        html += '</tbody>';
                        html += '</table>';

                        this._header = header;
                        this._html = html;

                        var popoverId = this._$popover.attr('aria-describedby');
                        var $popover = $('#'+popoverId);

                        $popover.find('.popover-title').html(header);
                        $popover.find('.popover-content').html(html);

                        /*console.log(this.currentYear);
                        console.log(this.currentMonth);
                        console.log(this.currentDay);*/
                        return;
                    }
                },
                getPrevYear: {
                    value: function getPrevYear() {
                        console.log('Call `getPrevYear` method');
                        this.currentYear = this.currentYear - 1;
                        this.showCurrent(this.currentYear, this.currentMonth);
                    }
                },
                getNextYear: {
                    value: function getNextYear() {
                        console.log('Call `getNextYear` method');
                        this.currentYear = this.currentYear + 1;
                        this.showCurrent(this.currentYear, this.currentMonth);
                    }
                },
                getPrevMonth: {
                    value: function getPrevMonth() {
                        console.log('Call `getPrevMonth` method');
                        if (this.currentMonth == 0) {
                            this.currentMonth = 11;
                            this.currentYear = this.currentYear - 1;
                        } else {
                            this.currentMonth = this.currentMonth - 1;
                        }

                        this.showCurrent(this.currentYear, this.currentMonth);
                    }
                },
                getNextMonth: {
                    value: function getNextMonth() {
                        console.log('Call `getNextMonth` method');

                        if (this.currentMonth == 11) {
                            this.currentMonth = 0;
                            this.currentYear = this.currentYear + 1;
                        } else {
                            this.currentMonth = this.currentMonth + 1;
                        }

                        this.showCurrent(this.currentYear, this.currentMonth);
                    }
                },
                setDate: {
                    value: function setDate() {
                        console.log('Call `setDate` method');
                    }
                },
            }, {
                Default: {
                    get: function() {
                        return Default;
                    }
                },
                _jQueryInterface: {
                    value: function _jQueryInterface(config) {
                        var _this = this;

                        config = config || {};
                        return this.each(function() {
                            var $this = $(_this);
                            var _config = $.extend({}, DatePicker.Default, $this.data(), typeof config === "object" && config);

                            new DatePicker(_this, _config);
                        });
                    }
                }
            });

            return DatePicker;
        })();

        $.fn[NAME] = DatePicker._jQueryInterface;
        $.fn[NAME].Constructor = DatePicker;
        $.fn[NAME].noConflict = function() {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return DatePicker._jQueryInterface;
        };

        return DatePicker;
    })(jQuery);

}(jQuery);

(function($) {

    $('[data-rel="datepicker"]').each(function(){
       $(this).datepicker();
    });

})(jQuery);