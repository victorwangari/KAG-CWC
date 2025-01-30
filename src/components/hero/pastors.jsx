import React from "react";
import jimjim from "../../img/pastorjames1.jpg"

export default function PastorsRemarks() {
    return (
        <div className="container flex flex-col md:flex-row items-center justify-center p-8 bg-white">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={jimjim}
                    alt="Pastors"
                    className="rounded-lg shadow-lg w-full md:w-3/4"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Welcome to CHRISTIAN WORSHIP CENTRE(<span className="text-red-700">CWC</span>) - Gikambura Community
                </h1>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    We are a Christian Worship Centre based in Gikambura, passionately loving God, worshiping Him wholeheartedly, and engaging our community meaningfully. At CWC, we are committed to deepening our personal relationship with God to build godly communities that will impact nations for Christ.
                

                    Located just 100 meters from Gikambura Centre, we welcome you to join our vibrant fellowship. Alongside our main services, we offer Sunday school for children of all ages and engaging, age-appropriate youth services.

                    CWC is also growing beyond Gikambura, with churches in Kamangu and Ndacha, extending our mission to reach more communities for Christ.

                    Karibu CWC, and may God bless you as we worship together!
                </p>
                <p className="text-gray-900 italic font-semibold mb-4">
                    "Come, taste and see that the Lord is good! Ps. 34:8"
                </p>
                <p className="text-gray-900 font-bold font-medium">Rev.James Maina & Rev.Rebecca James</p>
                <p className="text-green-700 font-bold">Senior Pastors.</p>
            </div>
        </div>
    );
}
