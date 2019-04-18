import { PolymerElement, html } from '@polymer/polymer';
//count = 0;
class MyElement extends PolymerElement {
    static get properties() {

        return {
            text: String,
            sub: String,
            act: String
        }
    }
    static get template() {
        return html`
        <style>
        .hovicon {
            display: inline-block;
            font-size: 35px;
            line-height: 90px;
            cursor: pointer;
            margin: 20px;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            text-align: center;
            position: relative;
            text-decoration: none;
            z-index: 1;
            color: #fff;
        }
        .hovicon:after {
            pointer-events: none;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            content:'';
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
        }
        .hovicon:before {
            speak: none;
            font-size: 48px;
            line-height: 90px;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            display: block;
            -webkit-font-smoothing: antialiased;
        }
        /* Effect 1 */
         .hovicon.effect-1 {
            background: rgba(255, 255, 255, 0.1);
            -webkit-transition: background 0.2s, color 0.2s;
            -moz-transition: background 0.2s, color 0.2s;
            transition: background 0.2s, color 0.2s;
        }
        .hovicon.effect-1:after {
            top: -7px;
            left: -7px;
            padding: 7px;
            box-shadow: 0 0 0 4px #fff;
            -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
            -webkit-transform: scale(.8);
            -moz-transition: -moz-transform 0.2s, opacity 0.2s;
            -moz-transform: scale(.8);
            -ms-transform: scale(.8);
            transition: transform 0.2s, opacity 0.2s;
            transform: scale(.8);
            opacity: 0;
        }
        /* Effect 1a */
         .hovicon.effect-1.sub-a:hover {
            background: rgba(255, 255, 255, 1);
            color: #41ab6b;
        }
        .hovicon.effect-1.sub-a:hover i {
            color: #41ab6b;
        }
        .hovicon.effect-1.sub-a:hover:after {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
        </style>
        <button type = "button" class = "hovicon effect-1 sub-a" value = "first" id = "first" on-click = "funfirst">First</button>
        <button type = "button" value = "second" id = "second" on-click = "funSecond">Second</button>
        <button type = "button" value = "third" id = "third" on-click = "funThird">Third</button>
       
            <form id ="formOne" style = "display:none">
            First:
            <input type = "text" id = "1" name = "user">
            <input type = "button" value = "next" on-click = "funSecond">
            </form>

            <form id = "formTwo"  style = "display:none">
            Second:
            <input type = "text" id = "2" name = "user">
            <input type = "button" value = "next" on-click = "funThird">
            </form>

            <form  action = "demo.html" id = "formThree"  style = "display:none">
            Third:
            <input type = "text" id = "3" name = "user">
            <input type = "button" value = "submit" on-click = "funfour">
            </form>
     
       

            `;
    }
    funfirst(){
        console.log("first")
        let a = this.shadowRoot.getElementById("formOne");
        console.log(a)
        a.setAttribute("style","display:block");
       
    }

    funSecond(){
        console.log("second");
        let finput = this.shadowRoot.getElementById("1").value;
        if(finput == ""){
            console.log("please enter the fields before moving to next page")
        }else{
            let a = this.shadowRoot.getElementById("formOne");
            a.setAttribute("style","display:none");
            let b = this.shadowRoot.getElementById("formTwo");
            b.setAttribute("style","display:block");
        }
    }
    funThird(){
        console.log("third");
        let finput = this.shadowRoot.getElementById("2").value;
        if(finput == ""){
            console.log("please enter the fields before moving to next page")
        }else{
            let a = this.shadowRoot.getElementById("formTwo");
            a.setAttribute("style","display:none");
            let b = this.shadowRoot.getElementById("formThree");
            b.setAttribute("style","display:block");
        }
    }

    funfour(){
        let a = this.shadowRoot.getElementById("1").value;
        let b =this.shadowRoot.getElementById("2").value;
        let c = this.shadowRoot.getElementById("3").value;
        document.write(a + " " + b +  " " + c)
    }

    
}
customElements.define('my-element', MyElement);