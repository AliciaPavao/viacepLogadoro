document.getElementById('alertBasico').addEventListener('click', function() {
    Swal.fire({
        title: 'Alerta Básico!',
        text: 'Este é um alerta simples',
        icon: 'question'
    });
});

document.getElementById('alertSucesso').addEventListener('click', function() {
    Swal.fire({
        title: 'Alerta de Sucesso!',
        text: 'Este é um alerta de sucesso',
        icon: 'success',
    });
});

document.getElementById('alertErro').addEventListener('click', function() {
    Swal.fire({
        title: 'Alerta de Erro!',
        text: 'Este é um alerta de erro',
        icon: 'error',
    });
});

document.getElementById('alertAviso').addEventListener('click', function() {
    Swal.fire({
        title: 'Alerta de Aviso!',
        text: 'Este é um alerta de aviso',
        icon: 'warning',
    });
});

document.getElementById('alertInfo').addEventListener('click', function() {
    Swal.fire({
        title: 'Alerta Informativo!',
        text: 'Este é um alerta de informação',
        icon: 'info',
    });
});

document.getElementById('alertConfirm').addEventListener('click', function() {
    Swal.fire({
        title: 'Você tem certeza?',
        text: 'Este ação é irreversível',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Confirmado!',
                text: 'Você confirmou a ação.',
                icon: 'success',
            })
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: 'Cancelado',
                text: 'A ação foi cancelada.',
                icon: 'error',
            })
        }
    });
});

document.getElementById('alertInput').addEventListener('click', function() {
    Swal.fire({
        title: 'Digite seu nome',
        input: 'text',
        inputPlaceholder: 'Seu nome aqui',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            Swal.fire({
                title: `Olá, ${result.value}!`,
                text: "seu nome foi recebido com sucesso!",
                icon: 'success',       
            });
        }
    });
});

document.getElementById('alertTimer').addEventListener('click', function() {
    Swal.fire({
        title: 'Auto fechamento',
        text: 'Este alerta fechará em 5 segundos',
        timer: 5000,
        timerProgressbar: true,
        didOpen: () => {
            Swal.showLoading();
        }
    });
});

document.getElementById('alertHTML').addEventListener('click', function() {
    Swal.fire({
        title: '<strong>Alerta com HTML!</strong>',
        html: 'Você pode usar um html customizado <a href="https://sweetalert2.github.io/#input-types" target = "_blank">Aqui</a>',
        icon: 'info',
        
    });
});