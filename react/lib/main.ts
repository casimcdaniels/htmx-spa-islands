import r2wc from "@r2wc/react-to-web-component"

import { Example } from './example'
export { Example }


const WebGreeting = r2wc(Example, {
    props: {
        text: "string",
        callback: "function"
    }
})

customElements.define("the-example", WebGreeting)