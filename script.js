if (window.File && window.FileReader && window.FileList) {
    alert('Todas las APIs de FILE son soportadas')
} else { alert('La API de FILE no es soportada en este navegador.') }

function handleFileSelect(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var src = document.createAttribute('src');
        src.value = e.target.result;
        video.setAttributeNode(src);
        mensaje.innerHTML = '<p>Cargando...</p>';
    }
    reader.readAsDataURL(file);
    setTimeout(alert("Cargando video...\n\nEl nombre del video es: " + file.name + "\nLa última fecha de modificación es: " + file.lastModifiedDate + "\nEl tipo de archivo es: " + file.type + "\nEl tamaño del archivo es: " + file.size));
}


function playFunction() { document.getElementById('video').play(); }
function pauseFunction() { document.getElementById('video').pause(); }
function moreVolumenFunction() { try { document.getElementById('video').volume += 0.1 } catch (error) { } };
function lessVolumenFunction() { try { document.getElementById('video').volume -= 0.1 } catch (error) { } };