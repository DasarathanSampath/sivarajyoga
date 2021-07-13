<template>
    <div class="myHead">
        <div class="myNameCard">
            <div class="myRow">
                <div class="myColumnNameCard1">
                    <img src="@assets/namecard/namecard.png" alt="MuraliKrishnan" class="myNameCardImg">
                </div>
                <div class="myColumnNameCard2">
                    <div class="myName">{{NameCards.cardTitle}}</div>
                    <div class="myTitle">{{NameCards.qualification1}}</div>
                    <div class="myDescription">{{NameCards.qualification2}}</div>
                </div>
            </div>
        </div>
        <div class="myChip">
            <img src="@assets/namecard/call.svg" alt="Contact" width="96" height="96" class="myChipImg">
            <span style="font-weight: 600;"> +91 97905 67188</span> <br/> <span style="font-weight: 600;"> +91 97905 67188 </span>
        </div>                         
        <div class="myAddress">
            <div style="font-size: 1.2rem; font-weight: bold;"> {{NameCards.address1}} </div>
            <div style="font-color: gray;"> {{NameCards.address2}} </div>
            <div> {{NameCards.address3}} </div>
            <div> {{NameCards.address4}} </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        NameCards() {
            return this.$themeConfig.locales[this.$localePath].nameCards
        }
    }
}

</script

<style>
    
</style>