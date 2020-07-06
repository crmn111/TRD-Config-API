# TRD Config API

## Notes

- Tezos Reward Distribution uses a yaml file for the config of the delegators
- This software exposes the config file in a Read-Only API
- The API can return all delegators and individual fees or one delegator only
- This software is licensed under the MIT license and was donated to the community by Proof of Bake
- Credits to the authors and maintainers of the great TRD: https://github.com/tezos-reward-distributor-organization/tezos-reward-distributor
- Credits to @loginwashere

## Installation

- Install `Node.JS` - `sudo apt install nodejs`
- Install `npm` - `sudo apt install npm`
- Clone repo in some folder
- Copy `sample.env` into `.env` file - `cp sample.env .env`
- Set path to config file `CONFIG_PATH`, and basic auth credentials `AUTH_LOGIN`, `AUTH_PASSWORD` in `.env` file
- Install app dependencies - `npm install`
- Install `pm2` to run app - `npm install -g pm2`
- Start app - `pm2 start src/index.js --env production`

## Update

- Pull changes from repo
- Run - `pm2 restart src/index.js --env production`

## Check out app

- with curl in terminal run `curl -H 'Authorization: Basic AUTH' http://IP:PORT/api/fee` where
  - `AUTH` - base64 encoded string of `login:password`. You can get it in chrome dev tools like this `btoa('login:password')`
  - `IP` - ip of server where this service is running
  - `PORT` - port this service in running on
- To check out fee by address run `curl -H 'Authorization: Basic AUTH' http://IP:PORT/api/fee/tz1gJ1Sym4RcUyG8XqzjQxvVgjQK6ZKvi3Q5`
