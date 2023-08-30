/** @type {import('houdini').ConfigFile} */


export default {
    watchSchema: {
        url: 'http://localhost:4000/graphql',
    },
    scalars: {
        DateTime: {
            type: 'Date',
            unmarshal(val) {
                return val ? new Date(val) : null
            },
            marshal(date) {
                return date && date.getTime()
            }
        }
    }
}