/**
 * twostim-tworesponse plugin
 */
(function($) {
    jsPsych['twostim-tworesponse'] = (function() {

        var plugin = {};

        plugin.create = function(params) {
            var trials = new Array(params.stimuli.length);
            for (var i = 0; i < trials.length; i++) {
                trials[i] = {};
                trials[i].type = "twostim-tworesponse";
                trials[i].a_path = params.stimuli[i][0];
                trials[i].b_path = params.stimuli[i][1];
                //trials[i].answer = params.answer[i];
                trials[i].choices = params.choices;
                // timing parameters
                trials[i].timing_first_stim = params.timing_first_stim || 1000;
                trials[i].timing_second_stim = params.timing_second_stim || -1; // if -1, then second stim is shown until response.
                trials[i].timing_gap = (typeof params.timing_gap === 'undefined') ? 0 : params.timing_gap;
                trials[i].timing_post_trial = (typeof params.timing_post_trial === 'undefined') ? 1000 : params.timing_post_trial;
                // optional parameters
                trials[i].is_html = (typeof params.is_html === 'undefined') ? false : true;
                trials[i].data = (typeof params.data === 'undefined') ? {} : params.data[i];
            }
            return trials;
        };

        plugin.trial = function(display_element, block, trial, part) {

            // if any trial variables are functions
            // this evaluates the function and replaces
            // it with the output of the function

            // put this back in after updating to jsPsych v2.4
            //trial = jsPsych.normalizeTrialVariables(trial);

            var trial_complete = false;

            // show image
            if (!trial.is_html) {
                display_element.append($('<img>', {
                    src: trial.a_path,
                    "class": 'jspsych-twostim-tworesponse-stimulus'
                }));
            }
            else {
                display_element.append($('<div>', {
                    html: trial.a_path,
                    "class": 'jspsych-twostim-tworesponse-stimulus'
                }));
            }

            setTimeout(function() {
                if(!trial_complete){
                    $('.jspsych-twostim-tworesponse-stimulus').remove();
                    if (trial.timing_gap === 0) {
                        showSecondImage();
                    }
                    else {
                        setTimeout(function() {
                            showSecondImage();
                        }, trial.timing_gap);
                    }
                }
            }, trial.timing_first_stim);

            function showSecondImage() {

                // don't bother if all responses are recorded
                if (trial_complete) {
                    return;
                }

                if (!trial.is_html) {
                    display_element.append($('<img>', {
                        src: trial.b_path,
                        class: 'jspsych-twostim-tworesponse-stimulus',
                        id: 'jspsych-twostim-tworesponse-second-stimulus'
                    }));
                }
                else {
                    display_element.append($('<div>', {
                        html: trial.b_path,
                        class: 'jspsych-twostim-tworesponse-stimulus',
                        id: 'jspsych-twostim-tworesponse-second-stimulus'
                    }));
                }

                if (trial.timing_second_stim > 0) {
                    setTimeout(function() {
                        if (!trial_complete) {
                            $("#jspsych-twostim-tworesponse-second-stimulus").css('visibility', 'hidden');
                        }
                    }, trial.timing_second_stim);
                }
            }

            var startTime = (new Date()).getTime();

            var valid_response = [];
            for (var i = 0; i < trial.choices.length; i++) {
                valid_response[i] = false;
            }

            var response_times = [];
            var key_presses = [];

            var resp_func = function(e) {

                var endTime = (new Date()).getTime();

                var valid_choice = false;
                var which_choice = -1;

                for (var i = 0; i < trial.choices.length; i++) {
                    for (var j = 0; j < trial.choices[i].length; j++) {
                        if (e.which == trial.choices[i][j]) {
                            which_choice = i;
                            if (valid_response[which_choice] === false) {
                                valid_choice = true;
                            }
                        }
                    }
                }

                if (valid_choice) {

                    var rt = (endTime - startTime);

                    response_times[which_choice] = rt;

                    key_presses[which_choice] = e.which;

                    valid_response[which_choice] = true;

                    var done = true;
                    for (var i = 0; i < valid_response.length; i++) {
                        if (!valid_response[i]) {
                            done = false;
                        }
                    }

                    if (done) {
                        endTrial(response_times, key_presses);
                    }
                }
            }

            $(document).keydown(resp_func);

            function endTrial(rt, keys) {

                trial_complete = true;

                // remove display content
                display_element.html('');

                var trial_data = {
                    "trial_type": "twostim-tworesponse",
                    "trial_index": block.trial_idx,
                    "rt": JSON.stringify(rt),
                    "stimulus": trial.a_path,
                    "stimulus_2": trial.b_path,
                    "timing_first_stim": trial.timing_first_stim,
                    "key_press": JSON.stringify(keys)
                };
                block.writeData($.extend({}, trial_data, trial.data));

                $(document).unbind('keydown', resp_func);


                if (trial.timing_post_trial > 0) {
                    setTimeout(function() {
                        block.next();
                    }, trial.timing_post_trial);
                }
                else {
                    block.next();
                }

            }
        };

        return plugin;
    })();
})(jQuery);
