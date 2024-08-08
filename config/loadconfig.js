require('dotenv').config({path: "./config/.env"})

/*******************************************************************************
 * Function   :     LOADCONFIG
 * Access     :     Public
 * Description:     load parameter config from .env
 ******************************************************************************/
const LOADCONFIG = () => {
    return {
        Port_DB:  process.env.PORT_DB || null,
        CONN_STR: process.env.CONNECTION_STRING_DB || null
    }
}

/*******************************************************************************
 * Function   :     CHECKCONFIG
 * Access     :     Public
 * Description:     Error handle
 ******************************************************************************/
const CHECKCONFIG = () => {
    let CONFIG_PRE = LOADCONFIG()
    for (const [key, value] of Object.entries(CONFIG_PRE)) {
        if (value == null) {
            /* error handle */
            console.log("value in " + key + " .env is null")
        }
    }
}

/* Process */
CHECKCONFIG()

/* Export to server.js */
module.exports = LOADCONFIG