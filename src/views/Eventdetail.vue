<template>
    <div class="be-eventdetail-container">
        <div class="be-eventdetail-header be-mainpage-bg">
        </div>
        <div class="be-eventdetail-contenr">
            <div class="be-flex be-width-fluid wrap-reverse padding-left-8em padding-right-8em">
                <div class="be-eventdetail-content">
                    <div class="be-row-container">
                        <div class="be-eventdetail-title">
                            Baybeats Concert: The Wonderous 4 Fronts
                        </div>
                        <div class="be-eventdetail-info">
                            <i class="big icon be-icon-small-events align-center"></i>
                            <span class="eventdetail-info-text">Entertainment • Concerts</span>
                        </div>
                        <div class="be-eventdetail-info">
                            <i class="big icon be-icon-small-location-grey align-center"></i>
                            <span class="eventdetail-info-text">Thu, 7 Feb 2017  7:00-9:00pm</span>
                        </div>
                        <div class="be-eventdetail-info">
                            <i class="big icon be-icon-small-location-grey align-center"></i>
                            <span class="eventdetail-info-text">The Hub</span>
                        </div>
                    </div>
                    <div class="be-eventdetail-map-container">
                        <div class="be-map-info">
                            128 Prinsep Street, #01-01, 188655
                        </div>
                        <div class="be-map-display">

                        </div>
                    </div>
                    <div class="be-row-container margin-bottom-2em margin-top-2em be-width-70">
                        <div class="be-eventdetail-descript">
                            IG is a global leader in online trading, providing fast and flexible access to over 10,000 financial markets – including FX, CFDs on shares/indices/commodities, Options and Binaries. 
                        </br>
                        </br>
                            The head office in London was established in 1974, and we aim to become the default choice for active traders globally. It is an award-winning multi-platform trading company, the world’s No.1 provider of CFDs* and a global leader in forex.
                        </div>
                    </div>
                    <div class="be-row-container">
                        <div class="eventdetail-eventlist-title">
                            Event Highlights
                        </div>
                        <ul class="eventdetail-eventlist">
                            <li>
                                Best thing about this event 1 - lorem ipsum dolor darli
                            </li>
                            <li>
                                Best thing about this event 1 - lorem ipsum dolor darli
                            </li>
                            <li>
                                Best thing about this   1 - lorem ipsum dolor darli
                            </li>
                            <li>
                                Best thing about this event 1 - lorem ipsum dolor darli
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="be-eventdetail-submitbar">
                    <div class="be-eventdetail-bar">
                        <div class="be-row-container">
                            <div class="eventdetail-submitbar-title">
                                From $59.80 - $89.90
                            </div>
                        </div>
                        <div class="be-button-container">
                            <button class="ui button fluid be-theme-bg-color be-text-white huge">
                                Book Now
                            </button>
                        </div>
                        <div class="be-divider">
                        </div>
                        <div class="be-row-container">
                            <div class="be-flex be-flex-between">
                                <div class="padding-left-2em margin-bottom-1em">
                                    <div class="eventdetail-submitbar-lable-title">
                                        Attending
                                    </div>
                                    <div class="eventdetail-submitbar-lable-number">
                                        1000
                                    </div>
                                </div>
                                <div class="padding-right-2em">
                                    <div class="eventdetail-submitbar-lable-title">
                                        Interested
                                    </div>
                                    <div class="eventdetail-submitbar-lable-number">
                                        1900
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="be-devider"></div>
                    </div>
                    <div class="margin-top-2em">
                        <div class="be-row-container">
                            <div class="be-organised-title">
                                Organised by
                            </div>
                        </div>
                        <div class="be-row-container">
                            <div class="be-organiser-item be-flex be-flex-between">
                                <div>
                                    <img class="ui avatar image circular" src=""/>
                                </div>
                                <div>
                                    <div class="be-organiser-item-title">
                                        Craft Nation
                                    </div>
                                    <div class="be-organiser-item-text margin-top-1em">
                                        The best D.I.Y workshops you’ll ever find in Singapore.
                                    </div>
                                    <div class="be-organiser-item-text margin-top-1em">
                                        D.I.Y • Workshops, Talks 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="be-eventdetail-footer padding-left-8em padding-right-8em">
            <be-footer :isFixed="false" :isWhite="false"></be-footer> 
        </div>
    </div>
</template>

<style lang="sass">

// possible extraction 

.be-organiser-item {
    border: solid 1px #e2e2e2;
    height: 150px;
    padding: 1em;
}

.be-organiser-item-title {
    font-size: 16px;
    font-weight: bold;
    color: #161616;
    padding-left: 16px;
}

.be-organiser-item-text {
    font-size: 14px;
    line-height: 1.43;
    text-align: left;
    color: #1d1d1d;
    padding-left: 16px;
}


// whole page

.be-eventdetail-container {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 70px;
}

.be-eventdetail-header {
    height: 500px;
}

.be-eventdetail-container {
    margin: 3em 0;
    width: 100%;
}

.be-eventdetail-content {
    min-height: 100px;
    border: solid 1px #000;
    flex: auto;
    width: 350px;
}

.be-eventdetail-submitbar{
    min-height: 100px;
    width: 350px;
    border: solid 1px #000;
    flex: none;
}

.be-eventdetail-footer {

}

// left content

.be-eventdetail-title {
	font-size: 28px;
	font-weight: 700;
	line-height: 1.18;
    margin: 16px;
}

.be-eventdetail-descript {
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
    color: #1d1d1d;
    margin: 16px;
    word-wrap: break-word;
}

.be-eventdetail-info {
    margin: 16px;
}

.eventdetail-info-text {
    font-size: 16px;
    line-height: 1.44;
    color: #1d1d1d;
    vertical-align: middle;
}

.eventdetail-eventlist-title {
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
}

.eventdetail-eventlist {
    padding-left: 34px;
}

.eventdetail-eventlist > li{
    margin: 16px 0;
}

.be-map-info {
    margin: 16px 32px;
    font-family: Karla;
    font-size: 16px;
    text-align: left;
    color: #4a4a4a;
}

.be-map-display {
    min-height: 150px;
    border: solid 1px #ccc;
}

// right bar

.be-eventdetail-bar {
    background-color: #ffffff;
    box-shadow: 0 5px 15px 0 rgba(206, 206, 206, 0.2);
}

.be-organised-title {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}

.eventdetail-submitbar-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.38;
    text-align: left;
    color: #1d1d1d;
}

.eventdetail-submitbar-lable-title {
    font-size: 16px;
    text-align: center;
    color: #1d1d1d;
}

.eventdetail-submitbar-lable-number {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #1d1d1d;
}

</style>

<script>

import Bfooter from './components/Bfooter.vue';

export default {
    components: {
        'be-footer': Bfooter,
    }
} 
</script>