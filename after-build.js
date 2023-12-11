import { exec } from 'child_process'
import { copy } from 'fs-extra'

copy('src/fxmanifest.lua', 'dist/fxmanifest.lua')
exec('npx js-beautify -rf ./dist/assets/*.js')