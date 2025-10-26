import { termsContent } from '../data/terms';

const Terms = () => {
  return (
    <div className="md:py-8 py-6">
      <div className="space-y-8">
        {/* <div className="text-center space-y-4">
          <h1 className="font-bold md:!text-3xl !text-2xl">Terms of Use</h1>
          <div className="h-14 bg-gradient-to-r from-primary via-[#0577EE] to-[#0FD8D2] flex items-center justify-center">
            <p className="text-background">Effective Date: July 18, 2025</p>
          </div>
        </div> */}

        <div
          className="prose min-w-full prose-headings:md:!text-2xl prose-headings:!text-xl prose-p:md:!text-base prose-p:!text-sm prose-headings:!font-bold prose-p:!leading-normal prose-headings:!my-2 prose-li:md:!text-base prose-li:!text-sm prose-li:!leading-normal prose-h1:md:!text-3xl prose-h1:!text-2xl prose-h1:!mb-6"
          dangerouslySetInnerHTML={{ __html: termsContent }}
        />
      </div>
    </div>
  );
};

export default Terms;
