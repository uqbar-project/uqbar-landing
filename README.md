# uqbar-landing

Nueva landing del site de Uqbar


## Como levantar la pagina localmente??

Primero hay que instalar rbenv o rvm, pueden ver de instalar uno o el otro mediante las siguientes guias:

- [Guia instalacion RVM](https://rvm.io/rvm/install)
- [Guia instalacion RBENV](https://github.com/rbenv/rbenv#installation)

Despues una vez bajado localmente el proyecto, deberemos instalar la version de ruby que esta descripta en el .ruby_version si no lo detecta el environment

**Version actual: Ruby 2.5.0**

Una vez instalado el entorno y ruby, solo tenemos que instalar bundler haciendo

```shell
gem install bundler
```

y despues instalando las dependencias

```shell
bundle install
```

una vez que ya se instalaron las dependencias podemos levantar jekyll localmente haciendo

```shell
jekyll s -P5000
```

por ejemplo esto levantaria el servidor localmente en el puerto 5000

```
ernesto@x:~/uqbar/uqbar-landing(migrating-to-jekyll)$ jekyll s -P5000
Configuration file: /home/ernesto/uqbar/uqbar-landing/_config.yml
            Source: /home/ernesto/uqbar/uqbar-landing
       Destination: /home/ernesto/uqbar/uqbar-landing/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
       Jekyll Feed: Generating feed for posts
                    done in 0.235 seconds.
 Auto-regeneration: enabled for '/home/ernesto/uqbar/uqbar-landing'
    Server address: http://127.0.0.1:5000/
  Server running... press ctrl-c to stop.
```

Una vez levantado lo que se muestre por consola nos puede ayudar a ver algun error como un archivo que no se este encontrando o algun otro fallo, como informacion adicional cuando veamos algun comportamiento extraño en el navegador

Ahora solo falta visitar la url que levantamos en el navegador, en este caso:

```
http://localhost:5000/
```
