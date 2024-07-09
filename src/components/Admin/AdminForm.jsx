import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import Input from '../ui/Input/Input';

import { postBlogFn } from '../../api/blogs';

const AdminForm = () => {
  // ---------------------------------------------
  // RHF
  // ---------------------------------------------

  const {
    register,
    handleSubmit: onSubmitRHF,
    reset,
    formState: { errors },
  } = useForm();

  // ---------------------------------------------
  // RQ
  // ---------------------------------------------

  const queryClient = useQueryClient();

  const { mutate: postBlog } = useMutation({
    mutationFn: postBlogFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success('Entrada guardada');

      reset();

      // Avisarle a la tabla que se debe actualizar
      queryClient.invalidateQueries({
        queryKey: ['blogs'],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  // ---------------------------------------------
  // HANDLERS
  // ---------------------------------------------

  const handleSubmit = (data) => {
    toast.loading('Guardando... Aguarde');
    postBlog(data);
  };

  // ---------------------------------------------
  // RENDER
  // ---------------------------------------------

  return (
    <form className='card p-3 bg-light' onSubmit={onSubmitRHF(handleSubmit)}>
      <h1>Crear nueva entrada</h1>
      <hr />
      <Input
        className='mb-2'
        error={errors.title}
        label='Titulo'
        name='title'
        options={{
          required: 'Este campo es requerido',
          minLength: {
            value: 5,
            message: 'El titulo debe tener al menos 5 caracteres',
          },
          maxLength: {
            value: 100,
            message: 'El titulo debe tener como mucho 100 caracteres',
          },
        }}
        placeholder='Pure de manzana'
        register={register}
      />
      <Input
        className='mb-2'
        error={errors.imageUrl}
        label='Imagen'
        name='imageUrl'
        options={{
          required: 'Este campo es requerido',
          minLength: {
            value: 5,
            message: 'El enlace a la imagen debe tener al menos 5 caracteres',
          },
          pattern: {
            value:
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
            message:
              'El enlace ingresado no es válido, debe ser una URL válida',
          },
        }}
        placeholder='https://google.com'
        register={register}
      />
      <Input
        textarea
        className='mb-3'
        error={errors.content}
        label='Contenido'
        name='content'
        options={{
          required: 'Este campo es requerido',
          minLength: {
            value: 5,
            message: 'El contenido debe tener al menos 5 caracteres',
          },
        }}
        placeholder='Escribi acá el contenido de la entrada del blog'
        register={register}
      />
      <div className='text-end'>
        <button className='btn btn-danger' type='submit'>
          Guardar
        </button>
      </div>
    </form>
  );
};
export default AdminForm;
