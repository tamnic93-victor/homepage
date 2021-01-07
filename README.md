# BC Labs Co., Ltd.

## How to Install

```shell
$ yarn install
```


## How to Start

```shell
$ yarn start
```

## Cf

* [TypeScrypt](https://www.typescriptlang.org)
* [sass](https://sass-lang.com)
* [npm](https://www.npmjs.com)


## SonarQube

### requirement

* docker
  ```shell
  $ brew install docker
  ```
  > check `docker login`

* sonarqube
  ```shell
  $ ./sonarqube.sh 
  ```
  * `login`
  > id `admin` / pw `admin`
  * `create` project
  * `generator token`
  * add environment variables
    ```shell
    export SONAR_TOKEN=<token>
    ```

### run example

```shell
$ yarn test
```