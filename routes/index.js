var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login/json', async function (req, res, next) {
  console.log("hola");
  let infoArreglo = req.body;
  console.log(infoArreglo);
  const URL = 'http://oasysweb.saia.com.ec/andina/api/seguridad/acceso/login'
  try {
    const response = await axios.post(URL, infoArreglo);
    let respuesta_JWT = (response.data);
    if (respuesta_JWT.success == true) {
      console.log(response.data);
      res.json(response.data);
    }
    else {
      res.render('/', { error: 'Error en Las credenciales entregadas' });
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en Las credenciales entregadas' });
    } else {
      console.log('error:', error.message);
    }
  }
});

router.post('/login/json', async function (req, res, next) {
  console.log("hola");
  let infoArreglo = req.body;
  console.log(infoArreglo);
  const URL = 'http://oasysweb.saia.com.ec/andina/api/seguridad/acceso/login'
  try {
    const response = await axios.post(URL, infoArreglo);
    let respuesta_JWT = (response.data);
    if (respuesta_JWT.success == true) {
      console.log(response.data);
      res.json(response.data);
    }
    else {
      res.render('/', { error: 'Error en Las credenciales entregadas' });
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en Las credenciales entregadas' });
    } else {
      console.log('error:', error.message);
    }
  }
});

router.get('/local/lista/json', async function (req, res, next) {
  console.log("hola");
  let headersContenido = req.headers;
  console.log(headersContenido);
  const URL = 'http://oasysweb.saia.com.ec/andina/api/info/local/lista'
  try {
    const response = await axios.get(URL,{
      headers: {
        'Authorization': headersContenido.authorization,
      }
    });
      console.log(response.data);
      res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en local lista' });
    } else {
      console.log('error:', error.message);
    }
  }
});

router.get('/linea/lista/json', async function (req, res, next) {
  console.log("hola");
  let headersContenido = req.headers;
  console.log(headersContenido);
  const URL = 'http://oasysweb.saia.com.ec/andina/api/info/linea/lista'
  try {
    const response = await axios.get(URL,{
      headers: {
        'Authorization': headersContenido.authorization,
      }
    });
      console.log(response.data);
      res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en local lista' });
    } else {
      console.log('error:', error.message);
    }
  }
});
router.get('/linea/listaPorRango/:lineas', async function (req, res, next) {
  console.log("hola");
  var params = req.params.lineas;
  let headersContenido = req.headers;
  console.log(headersContenido);
  const URL = "http://oasysweb.saia.com.ec/andina/api/info/linea/listaPorRango/"+params
  try {
    const response = await axios.get(URL,{
      headers: {
        'Authorization': headersContenido.authorization,
      }
    });
      console.log(response.data);
      res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en local lista' });
    } else {
      console.log('error:', error.message);
    }
  }
}); 

router.get('/seguridad/nivel/:servicio', async function (req, res, next) {
  console.log("hola");
  var params = req.params.servicio;
  let headersContenido = req.headers;
  console.log(headersContenido);
  const URL = "http://oasysweb.saia.com.ec/andina/api/seguridad/nivel/" + params
  try {
    const response = await axios.get(URL,{
      headers: {
        'Authorization': headersContenido.authorization,
      }
    });
      console.log(response.data);
      res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en local lista' });
    } else {
      console.log('error:', error.message);
    }
  }
}); 

router.post('/inventario/reportes/saldosListar/json', async function (req, res, next) {
  console.log("hola");
  var bodyEnvio = req.body;
  let headersContenido = req.headers;
  console.log(headersContenido);
  const URL = "http://oasysweb.saia.com.ec/andina/api/inventario/reportes/saldosListar"
  try {
    const response = await axios.post(URL, bodyEnvio, {
      headers: {
        'Authorization': headersContenido.authorization,
      }
    });
      console.log(response.data);
      res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      res.render('error', { error: 'Error en local lista' });
    } else {
      console.log('error:', error.message);
    }
  }
}); 


module.exports = router;
