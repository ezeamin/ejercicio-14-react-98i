const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postBlogFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Ocurrió un error guardando la entrada');
  }
};

export const getBlogsFn = async () => {
  const res = await fetch(`${BACKEND_URL}/blogs`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Ocurrió un error leyendo las entradas del blog');
  }

  return data;
};

export const deleteBlogFn = async (blogId) => {
  const res = await fetch(`${BACKEND_URL}/blogs/${blogId}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error(
      'Ocurrió un error intentando eliminar el blog seleccionado'
    );
  }
};
