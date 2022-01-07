import React from 'react';
import styles from './BlogSingleHeader.module.css'
import singleBlogImg from '../../../utility/singleBlogImg.webp';



const BlogSingleHeader = () => {
    return (
        <div style={{ marginTop: 150 }} className="container">
            <div>
                <p className={styles.dateTime}>1 JANUARY, 2022 || <i className={styles.love}>&hearts;</i> (3)</p>
                <div className="text-center">
                    <figure>
                        <img src={singleBlogImg} alt="" className="img-fluid" />
                        <figcaption>Food Name</figcaption>
                    </figure>
                </div>
                <div>
                    <p className={styles.singleBlogDescription}>Description :  ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut nulla quibusdam, saepe quam vero voluptate minima commodi cum, voluptas facilis accusantium corporis voluptatibus? Sunt debitis adipisci veniam placeat cumque porro sequi itaque expedita tempora dignissimos vitae accusamus molestiae aliquam in magnam officiis vel esse incidunt repellendus, nisi ex dicta eius blanditiis? Tempore placeat eius nisi nihil, quia accusantium voluptas quas ratione dolorem quasi id obcaecati culpa natus, nemo aliquam magnam saepe accusamus minima veritatis voluptate velit est itaque! Consectetur assumenda tempora dolorum ducimus blanditiis molestiae nihil, commodi aspernatur eaque vel esse at velit soluta laborum iste, cumque provident fugiat molestias sed expedita vero, rem suscipit! Aperiam praesentium aspernatur possimus libero voluptate! Ut error voluptatem quas architecto est possimus expedita inventore autem at non, perferendis ullam veritatis quasi voluptatibus enim, obcaecati nesciunt nostrum. Temporibus nisi error consequatur. Numquam exercitationem voluptatem voluptate laboriosam cum. Blanditiis obcaecati doloremque laudantium pariatur, voluptatum eaque, commodi expedita voluptas vel aperiam molestias fuga? Accusantium, repellendus corrupti doloribus officia, recusandae dignissimos autem soluta, mollitia fugiat laboriosam similique. Ex blanditiis esse quidem distinctio delectus suscipit, quis maiores nemo vero optio aliquam minus soluta magni voluptate repellat necessitatibus sint, totam reiciendis, iusto velit a quod. Magni corrupti explicabo vel!</p>
                </div>
            </div>
        </div>
    );
};

export default BlogSingleHeader;