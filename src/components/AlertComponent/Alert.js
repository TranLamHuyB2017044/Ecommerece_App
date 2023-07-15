import Swal from 'sweetalert2';
import Toast from 'sweetalert2';
class MyAlert {
    Alert(icon, text) {
        Swal.fire({
            position: 'top',
            icon: icon,
            text: text,
            showConfirmButton: false,
            timer: 2000,
            width: 500,

        });
    }
    Toast(icon, title) {  
      Toast.fire({
        icon: icon,
        title: title,
        timer: 2000,
        showConfirmButton: false,

      })
    }
    Confirm(title, icon, text, confirmButtonText) {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
        }).then((result) => {
            return result.isConfirmed;
        });
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new MyAlert();