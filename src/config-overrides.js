/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, override } = require('customize-cra')
module.exports = override(useBabelRc())
/* import { useBabelRc, override } from 'customize-cra'
export default override(useBabelRc) */
