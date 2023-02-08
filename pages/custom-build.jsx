import { useState } from 'react';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/CustomBuild.module.css';

const CustomBuild = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    images: {}
  });
  const { name, email, message, images } = formData;

  const onChange = (e) => {
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files
      }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
      }));
    }

    console.log(formData)
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      toast.error('Please fill out all fields.');
      return;
    }

    if (images.length > 2) {
      toast.error('Max 2 images allowed for upload.');
      return;
    }

    // Store images in firebase
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${name}-${image.name}`;

        const storageRef = ref(storage, 'images/' + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            switch (snapshot.state) {
              case 'paused':
                break;
              case 'running':
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              resolve(downloadURL);
            });
          }
        )
      })
    }

    const imgUrls = await Promise.all(
      [...images].map(image => storeImage(image))
    ).catch(() => {
      toast.error('Images not uploaded.');
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
      status: 'Not Viewed',
      notes: ''
    };

    delete formDataCopy.images;

    await addDoc(collection(db, 'customBuilds'), formDataCopy);

    setFormData({
      name: '',
      email: '',
      message: '',
      images: {}
    });
    document.getElementById('images').value = null;

    toast.success('Form successfully submitted!');

    emailjs.send('service_fpgitnp', 'template_sn40wi6', formData, 'x0Y0O4zI5XkZwpMCk')
    .then((result) => {

    }, (error) => {
        console.log(error.text);
    });

  };

  return (
    <Layout title='Custom Build | VAV Customs'>
      <section className='pageSection'>
        <div className={styles.customBuildTitleContainer}>
          <h1 className='sectionTitle'>Custom Build</h1>
        </div>
        <div className={styles.formContainer}>
          <p>Have a custom build that you're looking for? Fill out the form below to get started!</p>
          <Link className={styles.formLink} href='/#gallery'>Check out my work</Link>
            <form className={styles.form} onSubmit={onSubmit}>
              <input className={styles.formInput} type='text' id='name' name='user_name' placeholder='Name' value={name} onChange={onChange} />
              <input className={styles.formInput} type='email' id='email' name='email' placeholder='Email' value={email} onChange={onChange} />
              <textarea className={styles.formInput} rows='5' id='message' name='message' placeholder='Message' value={message} onChange={onChange} />
              <label className={styles.imageLabel}>Have some inspiration? <span className={styles.smallText}>(2 file max)</span></label>
              <input type='file' className={styles.fileInput} id='images' max='2' accept='.jpg,.png,.jpeg' multiple onChange={onChange} />
              <button type='submit' className={`btn btnPrimary ${styles.formBtn}`}>Submit</button>
            </form>
        </div>
        <section className={styles.whyBlock}>
          <div className={styles.textSection}>
            <p className={styles.textSecondary}>Benefits</p>
            <h2 className={styles.whyBlockTitle}>Why Custom?</h2>
            <div className={styles.whyBlockText}>
              <h3>Uniquely Yours</h3>
              <p>If you're not looking for a pre-made piece, this option allows you to order a fully custom piece exactly how you want. This means no two pieces will be the same, giving you a unique piece for your home. The options are endless as you are able to specify type of wood and duotone, and specifications to name a few. Have a picture of a piece of furniture or item that you want to draw inspiration from? You are able to upload it and tell us why you like it and how you want it incorporated into your piece!</p>
            </div>
            <div className={styles.whyBlockText}>
              <h3>More Options for pieces</h3>
              <p>Our store offers a wide variety of pre-made peieces, however, you might not find exactly what you're looking for. A custom order allows us to create pieces that you wouldn't otherwise find in our store because they are a specialized item. You are able to choose the small details of your piece, from the type of wood, to the finish used.</p> {/* Work on! */}
            </div>
            <div className={styles.whyBlockText}>
              <h3>Matching Wood Sets</h3>
              <p>Are you working on a DIY project redoing a part of your house? A tricky spot you can find yourself in, is not finding a complete matching set for your needs. Custom orders allow us to create matching sets to help you complete your project! You're able to receive pieces of the same style to seamlessly fit together, completing your space.</p> {/* Work on! */}
            </div>
          </div>
          <div className={styles.imgSection}>
            <img src='/images/grid-images/bathroom2.jpeg' alt='Custom woodwork done in bathroom' />
            <div className={styles.imgPair}>
              <img src='/images/grid-images/vanity1.jpg' alt='Custom wood bathroom vanity' />
              <img src='/images/grid-images/mirror1.jpg' alt='Custom wooden bathroom mirror' />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default CustomBuild;