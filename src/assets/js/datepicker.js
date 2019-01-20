(function($) {
    /*$.fn.Datepicker = function(options) {

    }*/



    $('body').on('click', '[data-rel="datepicker"] .btn', function() {

        var header, html, dateFormat, currentDate, currentMonth, currentYear, daysStrings, monthsStrings;

        // Set default format
        this.dateFormat = 'dd/mm/yyyy';

        // Set the current month, year
        this.currentDate = new Date();
        this.currentDay = this.currentDate.getDate();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();

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


        // Write selected month and year
        header = '<div id="header header-month-year">' + this.monthsStrings[this.currentMonth]['short'] + ' – ' + this.currentYear + '</div>';

        // Start rendering table of calendar
        html = '<table class="table calendar-table">';

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
        //var nextDay = dayMonth = this.dateFormat == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;

        if (firstDayOfCurrentMonth == 0)
            firstDayOfCurrentMonth = -5;
        else
            firstDayOfCurrentMonth = 2;

        if (this.dateFormat == 'M')
            var nextDay = 1;
        else
            var nextDay = firstDayOfCurrentMonth;

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
                    html += '<td class="prev-month-day text-muted text-center">' + pastDay + '</td>';
                } else if (currentDay > lastDayOfCurrentMonth) {
                    // Dates from next month
                    html += '<td class="next-month-day text-muted text-center">' + (nextDay++) + '</td>';
                } else {
                    // Current month dates
                    if (this.currentDay == currentDay)
                        html += '<td class="current-month-day active text-center">' + currentDay + '</td>';
                    else
                        html += '<td class="current-month-day text-center">' + currentDay + '</td>';

                    nextDay = 1;
                }
                if (week % 7 == 6 && currentDay >= lastDayOfCurrentMonth) {
                    rows = 6; // no more rows
                }
                week++;
            }

            html += '</tr>';
        }

        html += '</tbody>';
        html += '</table>';

        $(this).popover({
            placement: 'auto',
            html: true,
            template: '<div class="popover popover-datepicker" role="tooltip"><div class="arrow"></div><h3 class="popover-title text-center"></h3><div class="popover-content"></div></div>',
            title: header,
            content: html,
        });

    });



})(jQuery);
