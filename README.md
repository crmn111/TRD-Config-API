# TRD Config API

## Notes

- Tezos Reward Distribution uses a yaml file for the config of the delegators
- This software exposes the config file in a Read-Only API
- The API can return all delegators and individual fees or one delegator only
- This software is licensed under the MIT license and was donated to the community by Proof of Bake
- Credits to the authors and maintainers of the great TRD: https://github.com/tezos-reward-distributor-organization/tezos-reward-distributor
- Credits to @loginwashere

## Installation

- Install `docker` - Info on how to install it on various systems could be found [here](https://docs.docker.com/get-docker/)
  For example for Ubuntu 18.04 detailed instruction could be found [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
- Install `docker-compose` - Info on how to install it on various systems could be found [here](https://docs.docker.com/compose/install/)
  For example for Ubuntu 18.04 detailed instruction could be found [here](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)
- Clone repo in some folder
- Copy `sample.env` into `.env` file - `cp sample.env .env`
- Set path to config file `CONFIG_HOST_PATH`, and basic auth credentials `AUTH_LOGIN`, `AUTH_PASSWORD` in `.env` file
- Set `HOST` to `0.0.0.0` to be able to access api from other servers
- Build app image - `docker-compose build`
- Start app container `docker-compose up -d`

## Update

- Pull changes from repo
- Build app image - `docker-compose build`
- Start app container `docker-compose up -d`

## Check out app

- with curl in terminal run `curl -H 'Authorization: Basic AUTH' http://IP:PORT/api/fee` where
  - `AUTH` - base64 encoded string of `login:password`. You can get it in chrome dev tools like this `btoa('login:password')`
  - `IP` - ip of server where this service is running
  - `PORT` - port this service in running on
- To check out fee by address run `curl -H 'Authorization: Basic AUTH' http://IP:PORT/api/fee/tz1gJ1Sym4RcUyG8XqzjQxvVgjQK6ZKvi3Q5`
