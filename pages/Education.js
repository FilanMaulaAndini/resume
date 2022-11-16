import Link from 'next/link'
import Head from 'next/head'

const Education = () => {
    return(
    <>
        <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Brawijaya</h3>
                            <div class="subheading mb-3">Bachelor of Computer</div>
                            <div>Informatics Engineering</div>
                            <p>GPA: 3.68</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2017 - December 2021</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </>
    )
}

export default Education
