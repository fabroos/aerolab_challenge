import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
    * {
    box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
`

export default Global
