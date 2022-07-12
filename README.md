# chocoplanet

## External dependencies to install

1. ### [nvm](https://github.com/creationix/nvm) - node version manager - 0.33.2

    nvm helps us with maintain node and npm versions. This is needed when we need to switch between projects which use different node and npm versions.

    Run the following command to install it.

        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

    After installing nvm, add the startup script. If you are using bash add following snippet to `.bashrc`.

        export NVM_DIR="~/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

2. ### [nodejs](https://nodejs.org/en/)  - v14

    If you have higher version node installed on your machine then run the following code
    ```console
    
    nvm use 16
    ```
    This will switch your terminal to use nodejs version 7. You can check that using the following command.
    ```
    node -v  #should print  v16.x.x^
    ```
        
    To set it as by default follow these
     ```console
    nvm list
    nvm alias default 16
    node -v
    ```
  
 3. #### npm 4.2.0
    
        npm -v   # should print 4.x.x^


# Project setup steps
1. To run React app fresh run these commands:
    ```console
    rm -rf node_modules package-lock.json 
    npm cache clean --force
    ```

2. Install project dependencies

        npm i
     
3. Start server

        npm start  # Will start server and open the webpage localhost:3000
        
