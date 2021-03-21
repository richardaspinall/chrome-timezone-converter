// UTC should be an option in quick select
const options = `<option value=""disabled>Quick Select Office Locations</option>
    <option value="America/Los_Angeles"> SF & YVR &#127482&#127480&#127464&#127462 PST/PDT</option>
    <option value="America/Denver"> Denver &#127482&#127480 MST/MDT</option>
    <option value="America/New_York"> NY/TOR &#127482&#127480&#127464&#127462 EST/EDT</option>
    <option value="Etc/UTC"> UTC </option>
    <option value="Europe/London"> Dublin &#127470&#127466 BST/BDT</option>
    <option value="Asia/Kolkata"> Pune &#127470&#127475 IST</option>
    <option value="Asia/Tokyo"> Tokyo &#127471&#127477 JST</option>
    <option value="Australia/Canberra"> Melbourne &#127462&#127482 AEST/AEDT</option>
    <option value=""disabled> Full List</option>
    <option value="Pacific/Midway"> (UTC-11:00) Midway Island, American Samoa</option>
    <option value="America/Adak"> (UTC-10:00) Aleutian Islands</option>
    <option value="Pacific/Honolulu"> (UTC-10:00) Hawaii</option>
    <option value="Pacific/Marquesas"> (UTC-09:30) Marquesas Islands</option>
    <option value="America/Anchorage"> (UTC-09:00) Alaska</option>
    <option value="America/Tijuana"> (UTC-08:00) Baja California</option>
    <option value="America/Los_Angeles"> (UTC-08:00) Pacific Time (US and Canada)</option>
    <option value="America/Phoenix"> (UTC-07:00) Arizona</option>
    <option value="America/Chihuahua"> (UTC-07:00) Chihuahua, La Paz, Mazatlan</option>
    <option value="America/Denver"> (UTC-07:00) Mountain Time (US and Canada), Navajo Nation</option>
    <option value="America/Belize"> (UTC-06:00) Central America</option>
    <option value="America/Chicago"> (UTC-06:00) Central Time (US and Canada)</option>
    <option value="Pacific/Easter"> (UTC-06:00) Easter Island</option>
    <option value="America/Mexico_City"> (UTC-06:00) Guadalajara, Mexico City, Monterrey</option>
    <option value="America/Regina"> (UTC-06:00) Saskatchewan</option>
    <option value="America/Bogota"> (UTC-05:00) Bogota, Lima, Quito</option>
    <option value="America/Cancun"> (UTC-05:00) Chetumal</option>
    <option value="America/New_York"> (UTC-05:00) Eastern Time (US and Canada)</option>
    <option value="America/Port-au-Prince"> (UTC-05:00) Haiti</option>
    <option value="America/Havana"> (UTC-05:00) Havana</option>
    <option value="America/Indiana/Indianapolis"> (UTC-05:00) Indiana (East)</option>
    <option value="America/Asuncion"> (UTC-04:00) Asuncion</option>
    <option value="America/Halifax"> (UTC-04:00) Atlantic Time (Canada)</option>
    <option value="America/Caracas"> (UTC-04:00) Caracas</option>
    <option value="America/Cuiaba"> (UTC-04:00) Cuiaba</option>
    <option value="America/Manaus"> (UTC-04:00) Georgetown, La Paz, Manaus, San Juan</option>
    <option value="America/Santiago"> (UTC-04:00) Santiago</option>
    <option value="America/Grand_Turk"> (UTC-04:00) Turks and Caicos</option>
    <option value="America/St_Johns"> (UTC-03:30) Newfoundland</option>
    <option value="America/Fortaleza"> (UTC-03:00) Araguaina</option>
    <option value="America/Sao_Paulo"> (UTC-03:00) Brasilia</option>
    <option value="America/Cayenne"> (UTC-03:00) Cayenne, Fortaleza</option>
    <option value="America/Buenos_Aires"> (UTC-03:00) City of Buenos Aires</option>
    <option value="America/Godthab"> (UTC-03:00) Greenland</option>
    <option value="America/Montevideo"> (UTC-03:00) Montevideo</option>
    <option value="America/Miquelon"> (UTC-03:00) Saint Pierre and Miquelon</option>
    <option value="America/Bahia"> (UTC-03:00) Salvador</option>
    <option value="America/Noronha"> (UTC-02:00) Fernando de Noronha</option>
    <option value="Atlantic/Azores"> (UTC-01:00) Azores</option>
    <option value="Atlantic/Cape_Verde"> (UTC-01:00) Cabo Verde Islands</option>
    <option value="Europe/London"> (UTC) Dublin, Edinburgh, Lisbon, London</option>
    <option value="Africa/Monrovia"> (UTC) Monrovia, Reykjavik</option>
    <option value="Europe/Amsterdam"> (UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
    <option value="Europe/Belgrade"> (UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
    <option value="Europe/Brussels"> (UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option>
    <option value="Europe/Warsaw"> (UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
    <option value="Africa/Algiers"> (UTC+01:00) West Central Africa</option>
    <option value="Africa/Casablanca"> (UTC+01:00) Casablanca</option>
    <option value="Africa/Windhoek"> (UTC+01:00) Windhoek</option>
    <option value="Asia/Amman"> (UTC+02:00) Amman</option>
    <option value="Europe/Athens"> (UTC+02:00) Athens, Bucharest</option>
    <option value="Asia/Beirut"> (UTC+02:00) Beirut</option>
    <option value="Africa/Cairo"> (UTC+02:00) Cairo</option>
    <option value="Asia/Damascus"> (UTC+02:00) Damascus</option>
    <option value="Asia/Gaza"> (UTC+02:00) Gaza, Hebron</option>
    <option value="Africa/Harare"> (UTC+02:00) Harare, Pretoria</option>
    <option value="Europe/Helsinki"> (UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
    <option value="Asia/Jerusalem"> (UTC+02:00) Jerusalem</option>
    <option value="Europe/Kaliningrad"> (UTC+02:00) Kaliningrad</option>
    <option value="Africa/Tripoli"> (UTC+02:00) Tripoli</option>
    <option value="Asia/Baghdad"> (UTC+03:00) Baghdad</option>
    <option value="Asia/Istanbul"> (UTC+03:00) Istanbul</option>
    <option value="Asia/Kuwait"> (UTC+03:00) Kuwait, Riyadh</option>
    <option value="Europe/Minsk"> (UTC+03:00) Minsk</option>
    <option value="Europe/Moscow"> (UTC+03:00) Moscow, St. Petersburg</option>
    <option value="Africa/Nairobi"> (UTC+03:00) Nairobi</option>
    <option value="Asia/Tehran"> (UTC+03:30) Tehran</option>
    <option value="Asia/Muscat"> (UTC+04:00) Abu Dhabi, Muscat</option>
    <option value="Europe/Astrakhan"> (UTC+04:00) Astrakhan, Ulyanovsk, Volgograd</option>
    <option value="Asia/Baku"> (UTC+04:00) Baku</option>
    <option value="Europe/Samara"> (UTC+04:00) Izhevsk, Samara</option>
    <option value="Indian/Mauritius"> (UTC+04:00) Port Louis</option>
    <option value="Asia/Tbilisi"> (UTC+04:00) Tbilisi</option>
    <option value="Asia/Yerevan"> (UTC+04:00) Yerevan</option>
    <option value="Asia/Kabul"> (UTC+04:30) Kabul</option>
    <option value="Asia/Tashkent"> (UTC+05:00) Tashkent, Ashgabat</option>
    <option value="Asia/Yekaterinburg"> (UTC+05:00) Ekaterinburg</option>
    <option value="Asia/Karachi"> (UTC+05:00) Islamabad, Karachi</option>
    <option value="Asia/Kolkata"> (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
    <option value="Asia/Colombo"> (UTC+05:30) Sri Jayawardenepura</option>
    <option value="Asia/Katmandu"> (UTC+05:45) Kathmandu</option>
    <option value="Asia/Almaty"> (UTC+06:00) Astana</option>
    <option value="Asia/Dhaka"> (UTC+06:00) Dhaka</option>
    <option value="Asia/Rangoon"> (UTC+06:30) Yangon (Rangoon)</option>
    <option value="Asia/Novosibirsk"> (UTC+07:00) Novosibirsk</option>
    <option value="Asia/Bangkok"> (UTC+07:00) Bangkok, Hanoi, Jakarta</option>
    <option value="Asia/Barnaul"> (UTC+07:00) Barnaul, Gorno-Altaysk</option>
    <option value="Asia/Hovd"> (UTC+07:00) Hovd</option>
    <option value="Asia/Krasnoyarsk"> (UTC+07:00) Krasnoyarsk</option>
    <option value="Asia/Tomsk"> (UTC+07:00) Tomsk</option>
    <option value="Asia/Chongqing"> (UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi</option>
    <option value="Asia/Irkutsk"> (UTC+08:00) Irkutsk</option>
    <option value="Asia/Kuala_Lumpur"> (UTC+08:00) Kuala Lumpur, Singapore</option>
    <option value="Australia/Perth"> (UTC+08:00) Perth</option>
    <option value="Asia/Taipei"> (UTC+08:00) Taipei</option>
    <option value="Asia/Ulaanbaatar"> (UTC+08:00) Ulaanbaatar</option>
    <option value="Asia/Pyongyang"> (UTC+08:30) Pyongyang</option>
    <option value="Australia/Eucla"> (UTC+08:45) Eucla</option>
    <option value="Asia/Chita"> (UTC+09:00) Chita</option>
    <option value="Asia/Tokyo"> (UTC+09:00) Osaka, Sapporo, Tokyo</option>
    <option value="Asia/Seoul"> (UTC+09:00) Seoul</option>
    <option value="Asia/Yakutsk"> (UTC+09:00) Yakutsk</option>
    <option value="Australia/Adelaide"> (UTC+09:30) Adelaide</option>
    <option value="Australia/Darwin"> (UTC+09:30) Darwin</option>
    <option value="Australia/Brisbane"> (UTC+10:00) Brisbane</option>
    <option value="Australia/Canberra"> (UTC+10:00) Canberra, Melbourne, Sydney</option>
    <option value="Pacific/Guam"> (UTC+10:00) Guam, Port Moresby</option>
    <option value="Australia/Hobart"> (UTC+10:00) Hobart</option>
    <option value="Asia/Vladivostok"> (UTC+10:00) Vladivostok</option>
    <option value="Australia/Lord_Howe"> (UTC+10:30) Lord Howe Island</option>
    <option value="Pacific/Bougainville"> (UTC+11:00) Bougainville Island</option>
    <option value="Asia/Srednekolymsk"> (UTC+11:00) Chokurdakh</option>
    <option value="Asia/Magadan"> (UTC+11:00) Magadan</option>
    <option value="Pacific/Norfolk"> (UTC+11:00) Norfolk Island</option>
    <option value="Asia/Sakhalin"> (UTC+11:00) Sakhalin</option>
    <option value="Pacific/Guadalcanal"> (UTC+11:00) Solomon Islands, New Caledonia</option>
    <option value="Asia/Anadyr"> (UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky</option>
    <option value="Pacific/Auckland"> (UTC+12:00) Auckland, Wellington</option>
    <option value="Pacific/Fiji"> (UTC+12:00) Fiji Islands</option>
    <option value="Pacific/Chatham"> (UTC+12:45) Chatham Islands</option>
    <option value="Pacific/Tongatapu"> (UTC+13:00) Nuku"alofa</option>
    <option value="Pacific/Apia"> (UTC+13:00) Samoa</option>
    <option value="Pacific/Kiritimati"> (UTC+14:00) Kiritimati Island</option>`;

const tzcPopupButton = `<div id="tzc-pop-up">
            <button id="tzc-open-button">TZ: Australia/Canberra</button>

            <div id="tzc-options-display" class="hidden">
                <h3>Time Zone Converter</h3>
                <hr />
                <div>
                    <label> Convert MC to: </label>
                    <select size="1" id="tzc-full-list">
                        ${options}
                    </select>
                </div>
                <hr />
                <div>
                    <label> Add time to convert: </label>

                    <input id="tzc-input" type="text"
                        placeholder="Formatted time (YYYY-MM-DD HH:MM:SS), Message link or Unix time" ;
                        autocomplete="off" />
                </div>

                <div id="tzc-float-elements">
                    <div>
                        <label> From: </label>
                        <select size="1" id="tzc-from-tz">
                            ${options}
                        </select>
                    </div>
                    <div>
                        <label> To: </label>
                        <select size="1" id="tzc-to-tz">
                            ${options}
                        </select>
                    </div>
                    <div>
                        <button id="tzc-convert-button" class="btn">Convert</button>
                    </div>
                </div>
                <hr />
                <div id="tzc-output-placeholder"></div>

                <button id="tzc-close-options-button"> x </button>
            </div>
        </div>
    </div>`;

const tzcPopupCSS = `#tzc-pop-up {
                padding: 0 2px;
                color: #fff;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 11px;
                line-height: 20px;
            }

            #tzc-open-button {
                background-color: #353;
                color: inherit;
                font-size: inherit;
                text-align: left;
                height: 20px;
                min-width: 150px;
                padding: 0 6px;
                border-radius: 3px 3px 0 0;
                cursor: pointer;
                user-select: none;
            }

            #tzc-options-display {
                background-color: #333;
                position: fixed;
                bottom: 20px;
                padding: 10px;
                border-radius: 3px 3px 0 0;
            }

            #tzc-float-elements {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: inherit;
                padding: 10px 0;
            }

            #tzc-from-tz,
            #tzc-to-tz {
                cursor: pointer;
                width: 80%;
                margin: inherit;
            }

            #tzc-input {
                box-sizing: border-box;
                width: 100%;
            }

            #tzc-output-placeholder {
                font-size: 20px
            }

            #tzc-close-options-button {
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
                border-radius: 3px 0 0;

            }

            select {
                cursor: pointer;
            }

            #tzc-pop-up label{
                display: inline-block;
            }

            .hidden {
                display: none;
                visibility: hidden;
            }`;

function toggleTZConverterPopup() {
  console.log('run');
  if (query('#tzc-options-display').classList.contains('hidden')) {
    query('#tzc-options-display').classList.remove('hidden');
  } else {
    query('#tzc-options-display').classList.add('hidden');
  }
}

module.exports = {
  tzcPopupButton,
  tzcPopupCSS,
  toggleTZConverterPopup,
};
