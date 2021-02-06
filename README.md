# _Super Galactic Age Calculator_

#### _A website to calculate your galactic age!_

#### By _**Morgan Bradford**_

## Technologies Used

* _HTML_
* _JavaScript(ES6)_
* _jQuery_
* _Jest_
* _webpack_
* _eslint_

## Description

_A website to calculate your galactic age in Mercury, Venus, Mars, and/or Jupiter years. You can also view your life expectancy in Earth, Mercury, Venus, Mars, and/or Jupiter years_

## Setup/Installation Requirements

* _Requires Visual Studio Code_

_Instructions_: using terminal, navigate to the directory you would like to download this directory to. For this example we will be navigating to desktop. For any commands, type what is in between the 'single' quotation marks. To navigate to desktop, type 'cd ~/desktop'. To confirm your location enter 'pwd'. You should receive a message similar to "/c/Users/vampi/desktop" in this instance my location translates to "/hard drive c/Users folder/user/desktop". The last entry "desktop" is my current directory, and just happens to be inside of the other directories previously listed.

**Note: If you have a directory named programmingLanguageSuggester located here before using this next command, you may run into issues. To see a list of directories in your current location enter 'ls' in the terminal.**

Next, enter the following command 'git clone https://github.com/MorganJBradford/SGA-Calculator.git'

The terminal should return with something similar to:

> Cloning into 'SGA-Calculator'...
> remote: Enumerating objects: 351, done.
> remote: Counting objects: 100% (351/351), done.
> remote: Compressing objects: 100% (154/154), done.
> remote: Total 351 (delta 185), reused 292 (delta 127), pack-reused 0
> Receiving objects: 100% (351/351), 218.44 KiB | 1.63 MiB/s, done.
> Resolving deltas: 100% (185/185), done.


Next enter the command 'ls' which should return with a list of files and directories. Mine returned with:

desktop.ini icebreaker/ portfolio/ SGA-Calculator/

Because I did not have a directory named SGA-Calculator, I know it downloaded successfully.

> Next enter the directory with the command 'cd SGA-Calculator'. To confirm your location, enter 'pwd'. I received the following message "/c/Users/vampi/OneDrive/Desktop/epicodus/projects/SGA-Calculator". Once your location is confirmed, enter 'npm install'. You may see a similar message to the following: npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
> npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
> npm WARN deprecated har-validator@5.1.5: this library is no longer supported
> npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
> npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
> npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
> npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
> npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
> npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
> npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
> npm WARN deprecated eslint-loader@3.0.0: This loader has been deprecated. Please use eslint-webpack-plugin
> npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
> npm WARN deprecated popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
> 
> added 1030 packages, and audited 1031 packages in 6s
> 
> 39 packages are looking for funding
>  run `npm fund` for details
> 
> 3 low severity vulnerabilities
> 
> To address all issues, run:
>  npm audit fix --force
> 
> Run `npm audit` for details.

The warning are related to newer software being available, and should not prevent the application from running.

Next, enter 'npm run start'. The will run a development server in your default web browser.

Finally, follow the instructions on the web page.

**note: to cause the command line to be utilized without closing it, press "ctrl + c", then enter 'y' into the command line to close the dev server**

## Known Bugs

* _No known bugs_
* _if you find any bugs, **please** reach out to me via my email below_

## License

[MIT](LICENSE.txt)

## Contact Information

_Morgan Bradford_: morganjbradford95@gmail.com