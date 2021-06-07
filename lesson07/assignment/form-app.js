const app = Vue.createApp ({
// const CounterApp = {
    name: "counter app",
    data() {
        return {
            // Global Classes
            formVal: 'needs-validation form__container__content',
            submitBtn: 'btn btn-primary btn-lg',
            display: {display: 'flex'},
            direction: {flexDirection: 'column'},

            // First Name & Last Name
            infoFLname : {
                lfName: 'First Name',
                lsName: 'Last Name',
                firstName: '',
                lastName: '',
            },
            infoUser : {
                lGender:'Gender',
                lEthnic: 'Ethnicity',
            },
            button : {
                skipG: 'Skip',
                skipE: 'Skip',
                continue: 'Continue'
            },

            selectEthn :{ 
                sel: 'Select',
                afr: 'African',
                ame : 'American',
                asi : 'Asian',
                cau : "Caucasian"
            },
            
            selectGend : {
                sel: 'Select',
                fem: 'Female',
                mal: 'Male'
            },            

            // Styles         
            xtraStyle : {
                modal: {
                    color: 'darkblue' 
                },
                lblStyle: {
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                },
                fntWeight: {
                    fontWeight: 'bold',
                    margin: '1rem 0'
                },
                marginR: {
                    marginRight: '1rem'
                },
                select: {
                    width: '25%',
                },
                h5: {
                    color: '#FFF',
                    textTransform: 'uppercase'
                },
                inputW : {
                    width: '25%'
                }
            },
     
            imgSrc : [
                {img: "./images/mesut-kaya-unsplash.jpg"},
                {img: "./images/kalisa-unsplash.jpg"},
                {img: "./images/philipp-kammerer-unsplash.jpg"}
            ],

            private: "I'd rather not to say",
            isDisabled: true,
            isOkay: false,
            isFine: false,
            destination: '',
            lblSeason: `<b>What's your favorite season?</b>`, 
            season: '',
            lblAcc: `<b>Accomodation:</b>`,
            accomodation: 'Check',
        }
    },
    methods: {
        isNumber (val) {
            if (isNaN(Number(val.key))) {
                return val.preventDefault();
            }
        },
        isLetter(letter) {
            let character = String.fromCharCode(letter.keyCode); 
            if(/^[A-Za-z]+$/.test(character)) return true; 
            else letter.preventDefault();
        },
        scapeG: function () { 
            this.isOkay = !this.isOkay;
        },
        scapeE: function() {
            this.isFine = !this.isFine;
        },
      
        submitForm: function(event){
            event.preventDefault();
            console.log('Your name: ' + ' ' + this.infoFLname.firstName);
            console.log('Your last name: ' + ' ' + this.infoFLname.lastName);
            console.log('Your age: ' + ' ' + this.infoUser.age);
            console.log('Your favorite season: ' + ' ' + this.season);
            console.log('Your preferable accomodation: ' + ' ' + this.accomodation);
            document.getElementById('print').innerHTML = ('Congratulations!') + ' ' + (this.infoFLname.firstName) + ' ' +(this.infoFLname.lastName) + '. ' + ("your form has been successfully submitted");
        },
    }
})
// Vue.createApp(CounterApp).mount('#app')
